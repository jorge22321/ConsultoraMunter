const fs = require('node:fs');
const {parse} = require('@vue/compiler-dom');
const raw = fs.readFileSync('../example/index.html','utf8');
let form = raw.match(/<form\b[\s\S]*?<\/form>/)[0];
const ast = parse(form), edits=[];
const attr=(n,k)=>n.props?.find(p=>p.name===k)?.value?.content;
function visit(n) {
  if(n.type!==1){(n.children||[]).forEach(visit);return;}
  if(attr(n,'data-hook')==='country-selector-trigger') {
    edits.push({start:n.loc.start.offset,end:n.loc.end.offset,text:'<span class="munter-country" aria-hidden="true">+51</span>'});return;
  }
  if(n.tag==='input'||n.tag==='textarea') {
    const type=attr(n,'type');
    const field=n.tag==='textarea'?'message':type==='email'?'email':type==='phone'?'phone':attr(n,'aria-label')==='First name'?'firstName':'lastName';
    let text=n.loc.source.replace(/ value=""/,'').replace('type="phone"','type="tel"');
    if(field==='email')text=text.replace(' required=""','');
    const extras={firstName:'name="given-name" autocomplete="given-name" minlength="2" maxlength="49"',lastName:'name="family-name" autocomplete="family-name" minlength="2" maxlength="49"',email:'name="email" autocomplete="email" maxlength="150"',phone:'name="phone" autocomplete="tel-national" minlength="7" maxlength="25" pattern="[0-9+() .-]{7,25}"',message:'name="message" minlength="10" maxlength="2000"'};
    text=text.replace('<'+n.tag,`<${n.tag} v-model="form.${field}" ${extras[field]}`);
    edits.push({start:n.loc.start.offset,end:n.loc.end.offset,text});return;
  }
  (n.children||[]).forEach(visit);
}
visit(ast);
for(const e of edits.sort((a,b)=>b.start-a.start))form=form.slice(0,e.start)+e.text+form.slice(e.end);
for(const [a,b] of Object.entries({'My Form':'Formulario de consulta','Enter your first name':'Tu nombre','Enter your last name':'Tus apellidos','Enter your email':'nombre@correo.com','Enter your phone number':'986 994 914','Tell us how we can help you.':'Cuéntanos qué servicio necesitas.','First name':'Nombre','Last name':'Apellidos','Phone. Phone':'Celular','Phone':'Celular','Your message':'Tu consulta'}))form=form.replaceAll(a,b);
form=form.replace(/Email<span[^>]*>\*<\/span>/,'Correo (opcional)').replace('aria-label="Email"','aria-label="Correo (opcional)"');
form=form.replace('<form ','<form v-else @submit.prevent="submit" ').replace('<fieldset class="kLNiUo">','<fieldset class="kLNiUo" :disabled="sending">');
form=form.replace('aria-disabled="false"',':aria-disabled="sending"').replace('>Submit</span>',">{{ sending ? 'Registrando…' : 'Enviar consulta' }}</span>");
form=form.replaceAll('required=""','required');
form=form.replace('<button data-fullwidth=',`<label class="munter-consent"><input v-model="form.consent" type="checkbox" required /><span>Autorizo el uso de mis datos para atender esta consulta y he leído la <a href="/privacidad" target="_blank">información de privacidad</a>.</span></label><div class="munter-honeypot" aria-hidden="true"><label>Sitio web<input v-model="form.website" name="website" tabindex="-1" autocomplete="off" /></label></div><p v-if="error" class="munter-form-error" role="alert">{{ error }}</p><button data-fullwidth=`);
const script=`<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { contact, services } from '../data/content'
const route = useRoute()
const form = reactive({ firstName: '', lastName: '', email: '', phone: '', message: '', consent: false, website: '' })
const sending = ref(false), error = ref(''), ticket = ref('')
async function submit() {
  if (sending.value) return
  sending.value = true; error.value = ''
  try {
    const selected = String(route.query.servicio || '')
    const response = await fetch('/api/consultas', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, name: (form.firstName + ' ' + form.lastName).trim(), service: services.some(s => s.id === selected) ? selected : 'orientacion' }),
      signal: AbortSignal.timeout(15000),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.message || 'No pudimos registrar tu consulta. Inténtalo de nuevo.')
    ticket.value = data.reference
    Object.assign(form, { firstName: '', lastName: '', email: '', phone: '', message: '', consent: false, website: '' })
  } catch (e) {
    error.value = e instanceof Error && e.name !== 'TimeoutError' && e.name !== 'TypeError' ? e.message : 'No pudimos conectar. Inténtalo nuevamente o escríbenos por WhatsApp.'
  } finally { sending.value = false }
}
</script>`;
const success=`<div v-if="ticket" class="munter-form-status" role="status"><p>Tu consulta quedó registrada. Código de referencia: <strong>{{ ticket }}</strong>.</p><p>Para coordinar la atención directamente, <a :href="contact.whatsapp" target="_blank" rel="noopener noreferrer">escríbenos por WhatsApp</a>.</p><button @click="ticket = ''">Registrar otra consulta</button></div>`;
fs.writeFileSync('src/components/OriginalContactForm.vue',script+'\n<template>\n'+success+'\n'+form+'\n</template>\n');
