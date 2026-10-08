const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { once } = require('node:events');
const { createApp } = require('../app');
const valid = { name: 'Consulta de prueba', phone: '986123456', email: 'prueba@example.com', service: 'asesoria-legal', message: 'Necesito orientación sobre los servicios.', consent: true, website: '' };
async function setup(t, options = {}) {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'munter-test-'));
  const server = createApp({ dataDir, logErrors: false, ...options }).listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(async () => {
    await new Promise(resolve => server.close(resolve));
    const resolved = path.resolve(dataDir);
    assert.equal(path.dirname(resolved), path.resolve(os.tmpdir()));
    assert.ok(path.basename(resolved).startsWith('munter-test-'));
    await fs.rm(resolved, { recursive: true, force: true });
  });
  const url = `http://127.0.0.1:${server.address().port}`;
  const post = (data, headers = {}) => fetch(url + '/api/consultas', { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(data) });
  return { dataDir, url, post };
}
test('registers and persists only validated fields; survives app restart', async t => {
  const { post, dataDir } = await setup(t);
  const response = await post({ ...valid, name: '  Consulta de prueba  ', isAdmin: true });
  assert.equal(response.status, 201);
  const { reference } = await response.json();
  assert.match(reference, /^MA-[A-F0-9]{8}$/);
  const saved = JSON.parse((await fs.readFile(path.join(dataDir, 'consultas.jsonl'), 'utf8')).trim());
  assert.equal(saved.name, valid.name); assert.equal(saved.reference, reference); assert.equal(saved.consent, true); assert.equal(saved.isAdmin, undefined);
  const restarted = await setup(t, { dataDir });
  assert.equal((await restarted.post({ ...valid, email: '' })).status, 201);
  assert.equal((await fs.readFile(path.join(dataDir, 'consultas.jsonl'), 'utf8')).trim().split('\n').length, 2);
});
test('rejects missing consent, invalid input and spam without storing them', async t => {
  const { post, dataDir } = await setup(t, { maxRequests: 20 });
  for (const change of [{ consent: false }, { name: 'a' }, { service: 'unknown' }, { phone: 'abcdefghi' }, { phone: '() () ()' }, { email: 'not-an-email' }, { email: {} }, { message: 'a' }, { message: 'x'.repeat(2001) }, { website: 'spam.invalid' }]) assert.equal((await post({ ...valid, ...change })).status, 400);
  await assert.rejects(fs.access(path.join(dataDir, 'consultas.jsonl')));
});
test('rate limits requests and allows a new window', async t => {
  let time = Date.now();
  const { post } = await setup(t, { maxRequests: 1, now: () => time });
  assert.equal((await post(valid)).status, 201);
  const limited = await post(valid); assert.equal(limited.status, 429); assert.ok(limited.headers.get('Retry-After'));
  time += 16 * 60 * 1000;
  assert.equal((await post(valid)).status, 201);
});
test('blocks other origins and oversized or malformed bodies', async t => {
  const { post, url } = await setup(t);
  assert.equal((await post(valid, { Origin: 'https://untrusted.invalid' })).status, 403);
  assert.equal((await post(valid, { Origin: 'http://localhost:5173' })).status, 201);
  assert.equal((await post({ ...valid, message: 'x'.repeat(20000) })).status, 413);
  assert.equal((await fetch(url + '/api/consultas', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' })).status, 400);
  assert.equal((await fetch(url + '/api/consultas')).status, 404);
  assert.equal((await fetch(url + '/api/health')).status, 200);
});
test('reports a storage failure instead of a false success', async t => {
  const { post, dataDir } = await setup(t);
  await fs.writeFile(path.join(dataDir, 'consultas.jsonl'), '');
  await fs.unlink(path.join(dataDir, 'consultas.jsonl'));
  await fs.mkdir(path.join(dataDir, 'consultas.jsonl'));
  const response = await post(valid);
  assert.equal(response.status, 500);
  assert.equal((await response.json()).reference, undefined);
});
test('concurrent requests produce complete independent records', async t => {
  const { post, dataDir } = await setup(t, { maxRequests: 20 });
  const results = await Promise.all(Array.from({ length: 8 }, (_, i) => post({ ...valid, name: `Prueba concurrente ${i}` })));
  assert.ok(results.every(r => r.status === 201));
  const records = (await fs.readFile(path.join(dataDir, 'consultas.jsonl'), 'utf8')).trim().split('\n').map(JSON.parse);
  assert.equal(records.length, 8); assert.equal(new Set(records.map(r => r.id)).size, 8);
});
