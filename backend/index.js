require('dotenv').config();
const { createApp } = require('./app');
const app = createApp();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';
const server = app.listen(PORT, HOST, () => {
  console.log(`Munter & Asociados: http://${HOST}:${PORT}`);
});
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
