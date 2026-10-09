<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
</script>
<template>
  <main id="contenido">
    <PageHero
      kicker="TRANSPARENCIA"
      title="Privacidad"
      description="Información sobre el uso de los datos que compartes con nosotros."
      image="/images/finanzas.jpg"
      alt="Documentos y calculadora sobre un escritorio"
    />
    <section class="section-pad">
      <div class="container legal-copy">
        <p class="eyebrow">ÚLTIMA ACTUALIZACIÓN · OCTUBRE DE 2026</p>
        <h2>Información de privacidad</h2>
        <h3>Responsable y contacto</h3>
        <p>
          Consultora Munter y Asociados S.A.C. recibe las consultas enviadas desde esta web. Para
          consultas sobre tus datos, escribe a
          <a href="mailto:consultoramunteryasociados@gmail.com"
            >consultoramunteryasociados@gmail.com</a
          >
          o llama al 986 994 914. Dirección: Of. Mz. C, Lt. 11, A. H. Paul Poblet, Manchay,
          Pachacámac, Lima.
        </p>
        <h3>Datos y finalidad</h3>
        <p>
          Recogemos nombre, celular, correo opcional, área de interés, mensaje, fecha, código de
          referencia y constancia de consentimiento. Los usamos para registrar, atender y dar
          seguimiento a tu consulta. No utilizamos el formulario para enviar publicidad ni vendemos
          tus datos.
        </p>
        <h3>Almacenamiento y terceros</h3>
        <p>
          En el despliegue de Vercel, la consulta se guarda en almacenamiento privado de Vercel
          Blob. En la instalación Docker se guarda en un archivo privado del servidor. Los servicios
          de alojamiento procesan los datos para operar la web. El enlace de WhatsApp abre una
          plataforma externa sujeta a su propia política.
        </p>
        <h3>Conservación</h3>
        <p>
          Conservamos las consultas mientras sea necesario para atenderlas y cumplir las
          obligaciones aplicables. Puedes solicitar información, corrección o eliminación cuando
          corresponda por correo, indicando tu código de referencia. La eliminación requiere
          verificar que eres la persona titular de los datos.
        </p>
        <h3>Tus derechos</h3>
        <p>
          Puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus
          datos mediante el correo indicado. La consultora revisará cada solicitud conforme a la
          normativa aplicable.
        </p>
        <p class="legal-note">
          Esta información debe ser revisada y aprobada por la consultora antes de una entrega
          comercial. El plazo concreto de conservación y los datos registrales deben confirmarse con
          la empresa.
        </p>
      </div>
    </section>
  </main>
</template>
