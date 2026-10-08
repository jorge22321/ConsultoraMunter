<script setup lang="ts">
import { reactive, ref, watch, useId } from 'vue'
import { useRoute } from 'vue-router'
import { services, contact } from '../data/content'
import AreaIcon from './AreaIcon.vue'
const props = withDefaults(defineProps<{ mode?: 'asesoria' | 'general' }>(), { mode: 'asesoria' })
const route = useRoute()
const uid = useId()
const initialArea = () =>
  services.some((s) => s.id === route.query.servicio) ? String(route.query.servicio) : 'orientacion'
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: initialArea(),
  message: '',
  consent: false,
  website: '',
})
const sending = ref(false),
  error = ref(''),
  reference = ref('')
watch(
  () => route.query.servicio,
  () => {
    form.service = initialArea()
  },
)
async function submit() {
  if (sending.value) return
  sending.value = true
  error.value = ''
  try {
    const response = await fetch('/api/consultas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        name: `${form.firstName} ${form.lastName}`.trim(),
        message: `${props.mode === 'general' ? 'Consulta general' : 'Solicitud de asesoría'}: ${form.message}`,
      }),
      signal: AbortSignal.timeout(15000),
    })
    const data = await response.json()
    if (!response.ok)
      throw new Error(data.message || 'No pudimos registrar tu consulta. Inténtalo nuevamente.')
    reference.value = data.reference
    Object.assign(form, {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
      website: '',
    })
  } catch (e) {
    error.value =
      e instanceof Error && !['TimeoutError', 'TypeError'].includes(e.name)
        ? e.message
        : 'No pudimos conectar. Inténtalo de nuevo o escríbenos por WhatsApp.'
  } finally {
    sending.value = false
  }
}
</script>
<template>
  <div v-if="reference" class="infinity-form-success" role="status">
    <AreaIcon />
    <h3>Tu consulta quedó registrada.</h3>
    <p>
      Tu código de referencia es <strong>{{ reference }}</strong
      >.
    </p>
    <p>Para coordinar la atención directamente, puedes escribirnos por WhatsApp.</p>
    <a :href="contact.whatsapp" target="_blank" rel="noopener noreferrer" class="infinity-button"
      >Conversar por WhatsApp ↗</a
    >
    <button class="form-again" @click="reference = ''">Registrar otra consulta</button>
  </div>
  <form v-else class="infinity-form" aria-label="Formulario de consulta" @submit.prevent="submit">
    <fieldset :disabled="sending">
      <div class="infinity-form-grid">
        <label :for="uid + 'first'"
          >Nombre *<input
            :id="uid + 'first'"
            v-model="form.firstName"
            name="given-name"
            autocomplete="given-name"
            required
            minlength="2"
            maxlength="49"
        /></label>
        <label :for="uid + 'last'"
          >Apellidos *<input
            :id="uid + 'last'"
            v-model="form.lastName"
            name="family-name"
            autocomplete="family-name"
            required
            minlength="2"
            maxlength="49"
        /></label>
        <label :for="uid + 'email'"
          >Correo (opcional)<input
            :id="uid + 'email'"
            v-model="form.email"
            name="email"
            type="email"
            autocomplete="email"
            maxlength="150"
        /></label>
        <label :for="uid + 'phone'"
          >Celular *<input
            :id="uid + 'phone'"
            v-model="form.phone"
            name="phone"
            type="tel"
            autocomplete="tel"
            required
            minlength="7"
            maxlength="25"
            pattern="[+0-9 \(\)\-]{7,25}"
        /></label>
        <label :for="uid + 'area'" class="form-wide"
          >Área de interés *<select
            :id="uid + 'area'"
            v-model="form.service"
            name="service"
            required
          >
            <option value="orientacion">Necesito orientación</option>
            <option v-for="service in services" :key="service.id" :value="service.id">
              {{ service.title }}
            </option>
          </select></label
        >
        <label :for="uid + 'message'" class="form-wide"
          >{{ mode === 'general' ? 'Tu consulta' : 'Cuéntanos qué necesitas' }} *<textarea
            :id="uid + 'message'"
            v-model="form.message"
            name="message"
            required
            minlength="10"
            maxlength="1950"
            rows="4"
          />
        </label>
      </div>
      <div class="munter-honeypot" aria-hidden="true">
        <label
          >Sitio web<input v-model="form.website" name="website" tabindex="-1" autocomplete="off"
        /></label>
      </div>
      <label class="infinity-consent"
        ><input v-model="form.consent" type="checkbox" required /><span
          >Autorizo el uso de mis datos para atender esta consulta y he leído la
          <a href="/privacidad" target="_blank">información de privacidad</a>.</span
        ></label
      >
      <p v-if="error" class="infinity-form-error" role="alert">{{ error }}</p>
      <button class="infinity-button" type="submit" :disabled="sending">
        {{ sending ? 'Registrando…' : 'Enviar consulta' }} <span aria-hidden="true">↗</span>
      </button>
    </fieldset>
  </form>
</template>
