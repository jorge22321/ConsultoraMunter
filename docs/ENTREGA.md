# Entrega y revisión previa a la venta

Este sitio está pensado para un solo cliente. El código y el diseño activos son propios; no se utilizan recursos de Wix en la compilación actual. El historial previo del repositorio público sí conserva versiones derivadas de aquella plantilla. Para entregar una copia limpia a un cliente, crea un repositorio nuevo desde el estado actual, sin importar el historial antiguo, y revisa los derechos sobre el logo y los folletos que aportó la consultora.

## Datos del negocio

- Confirmar con la empresa la razón social, dirección, teléfono, correo y cada servicio antes de publicar como oferta definitiva.
- La ficha pública proporcionada por el usuario muestra el RUC 20612376191, pero también señala “baja de oficio”. Es una fuente secundaria y puede estar desactualizada. **Verificar directamente en SUNAT** el estado y condición del RUC antes de incluirlo, emitir comprobantes o firmar una transferencia comercial. El sitio no publica ese RUC.
- Confirmar por escrito que la consultora tiene derechos sobre el logo, favicon y folletos. Las fotografías nuevas están documentadas en `ASSET_LICENSES.md`.
- Un abogado peruano debe revisar la política de privacidad, el consentimiento del formulario, el plazo de conservación y las obligaciones de registro del banco de datos personales ante la ANPD. El texto de la web es un borrador operativo, no una certificación legal.

## Consultas y operación

1. Confirmar la titularidad de las cuentas de GitHub, Docker/GHCR, Vercel y Blob. Entregar acceso al cliente con privilegios mínimos y retirar accesos del desarrollador que ya no se necesiten.
2. En Vercel, comprobar que el Blob es **privado** y que `BLOB_READ_WRITE_TOKEN` solo está en los entornos requeridos. Hacer un envío real de prueba, localizarlo en el Blob y eliminar el registro de prueba.
3. Para avisos, verificar un dominio remitente en Resend y configurar `RESEND_API_KEY`, `NOTIFICATION_FROM` y `NOTIFICATION_TO=consultoramunteryasociados@gmail.com`. Hacer una prueba completa. Sin esto, revisar el almacén manualmente.
4. Para ver o borrar consultas privadas de Vercel, usar el panel del Blob o [Vercel CLI](https://vercel.com/docs/cli/blob) con el token del proyecto: `vercel blob list --prefix consultas/`, `vercel blob get <pathname>` y `vercel blob del <pathname>`. No compartir el token ni incluir consultas en Git.
5. En Docker, respaldar el volumen `munter-consultas` con acceso restringido. Detener el contenedor antes de borrar o depurar líneas del archivo JSONL para evitar escrituras simultáneas.
6. Definir por escrito un plazo concreto de conservación y un procedimiento de acceso, rectificación, cancelación y oposición; programar la depuración periódica. La web ya muestra el correo de privacidad.
7. El antispam de Vercel es básico y por instancia. Si se recibe spam sostenido, añadir un limitador compartido o un desafío verificado en servidor.
8. Al adquirir dominio propio, cambiar las URL de `frontend/index.html`, `frontend/src/router/index.ts`, `frontend/public/robots.txt` y `frontend/public/sitemap.xml`; configurar DNS y HTTPS.

## Verificación técnica

Ejecutar `npm run build --prefix frontend`, `npm test --prefix backend` y una prueba manual del menú, enlaces, responsive y formulario en móvil y escritorio. Revisar el contraste, las imágenes, `robots.txt`, `sitemap.xml` y cabeceras de seguridad en el despliegue final.

La publicación o venta no elimina automáticamente problemas de derechos de autor, de marca o de tratamiento de datos. Conservar esta lista con la aceptación del cliente y la revisión legal correspondiente.
