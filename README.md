# Consultora Munter & Asociados

Web en español construida con **Vue 3 + TypeScript + Vue Router** y **Node.js + Express**. Conserva la composición de la nueva plantilla Infinity Trade Exp: cabecera transparente sobre fotografía, títulos Kufam en cursiva, botones redondeados, franja de especialidades, secciones alternadas, formulario con pestañas y tarjetas superpuestas. Referencia: https://mendark07.wixstudio.com/public_template-132 (modelo Wix 8fb52357-73f1-4ace-a41b-62c71ba24082). Se adaptaron los textos, el logo y la paleta a Munter & Asociados (dorado, negro y grises cálidos). La aplicación funciona desde `frontend` y `backend`; no depende de `example`.

## Desarrollo

Con Node.js 22.19 o una versión compatible con las dependencias instaladas, abre dos terminales:

```powershell
cd backend
npm install
npm run dev
```

```powershell
cd frontend
npm install
npm run dev
```

Web: **http://127.0.0.1:5173**. API: **http://127.0.0.1:3000**. Vite redirige `/api` al backend, por lo que el frontend no incorpora una dirección de API fija en el código del formulario.

Las dependencias ya instaladas se pueden reutilizar; no es necesario ejecutar `npm install` en cada inicio.

## Versión compilada

```powershell
cd frontend
npm run build
cd ../backend
npm start
```

El backend sirve `frontend/dist`, las rutas de Vue y la API en **http://127.0.0.1:3000**. La configuración disponible está documentada en `backend/.env.example`. En Docker, `compose.yml` conserva las consultas en el volumen `munter-consultas`.

## Docker y Vercel

`docker compose up --build -d` inicia la web completa en el puerto 3000. Para usar otro puerto local, cambia únicamente el lado izquierdo de `ports` en `compose.yml`.

`vercel.json` construye el frontend y publica `api/health.js` y `api/consultas.js` como funciones Node. El formulario de Vercel guarda cada consulta en un Blob **privado** y confirma el envío solo después de guardarla. Es necesario crear un Vercel Blob privado, conectarlo al proyecto y habilitar `BLOB_READ_WRITE_TOKEN`; si falta, el formulario indica que está temporalmente indisponible. El backend Docker sigue guardando las consultas en `DATA_DIR`.

## Contenido y diseño

- `frontend/src/data/content.ts`: servicios, teléfono, dirección y enlaces de contacto.
- `frontend/src/views/`: plantillas Vue nativas de inicio, nosotros, catálogo, detalles de servicios, contacto, privacidad y accesibilidad.
- `frontend/src/components/InquiryForm.vue` e `InquiryPanel.vue`: formulario Vue conectado a Node, pestañas accesibles, validación y confirmación de registro.
- `frontend/src/components/OriginalMobileMenu.vue` y `src/composables/useOriginalLayout.ts`: navegación, menú móvil y cabecera fija, sin ejecución de Wix.
- `frontend/public/infinity-layout/`: estilos de la referencia con la paleta adaptada, cargados por página.
- `frontend/src/style.css`: ajustes de comportamiento, componentes Vue y espacio para los textos de Munter; las secciones se apilan en móvil.
- `frontend/public/infinity-assets/`: fotografías y tipografías locales de la referencia.
- `frontend/public/images/`: logo original y folletos proporcionados.

Se ampliaron los tres bloques originales de servicios a cinco siguiendo la misma composición alternada. Las páginas de detalle organizan las listas extensas en secciones del mismo diseño. Las antiguas cifras y testimonios de ejemplo se sustituyeron por información de servicios: no se atribuyen resultados o reseñas ficticias a Munter. Las fotografías de personas son ilustrativas de la plantilla, no retratos verificados del equipo.

Los scripts `frontend/tools/adapt-infinity.cjs`, `inspect-infinity.cjs` y `download-infinity.cjs` documentan la adaptación de la nueva referencia. Los scripts antiguos `restore-original-*.cjs` corresponden al diseño anterior y no deben ejecutarse sobre esta versión. No forman parte del arranque ni de la compilación. Volver a ejecutarlos sobrescribe las vistas generadas; para cambios de contenido habituales edita las vistas y `content.ts` directamente.

Se priorizan derecho, arquitectura e ingeniería y contabilidad/finanzas. También se incluyen comercio exterior/logística y marketing/diseño según la información proporcionada. No se han añadido estadísticas comerciales, reseñas, nombres de profesionales, horarios ni un correo de contacto no confirmados. El teléfono principal es **986 994 914** y la dirección corresponde a los folletos. Google Maps busca la zona; no se ha inventado una ubicación exacta.

## Consultas

`POST /api/consultas` valida nombre, celular, correo opcional, área, mensaje y consentimiento. Los registros se guardan de forma persistente en **`backend/data/consultas.jsonl`**, fuera de los archivos públicos. Cada línea es un registro JSON con código de referencia, fecha y versión del consentimiento. El archivo está excluido de Git. Para revisar las consultas desde el equipo servidor:

```powershell
Get-Content backend/data/consultas.jsonl | ForEach-Object { $_ | ConvertFrom-Json } | Select-Object reference, createdAt, name, phone, service, message
```

La API no expone un listado público de consultas. La escritura está serializada para una instancia del servidor. Para desplegar múltiples instancias debe sustituirse este almacenamiento por una base de datos compartida.

**El formulario registra solicitudes; no envía correos ni notificaciones automáticas.** Los botones de WhatsApp abren una conversación con el número de la consultora. Para notificaciones por email será necesario aportar y configurar un proveedor y la dirección de destino.

La API limita los envíos por IP, el tamaño del cuerpo y los orígenes aceptados; incluye un campo antispam, no registra mensajes ni datos personales en logs y solo devuelve éxito después de guardar. Los errores de conexión y guardado se muestran en el formulario. No se configuran proxies de confianza automáticamente.

## Verificación

```powershell
cd frontend
npm run build
npm run lint
cd ../backend
npm test
```

Las pruebas del backend cubren persistencia, validación, consentimiento, antispam, límites, orígenes, cuerpos inválidos, fallos de almacenamiento y escrituras simultáneas. Se verificó en navegador el diseño de escritorio y móvil, el menú, la navegación a ingeniería, la selección automática del área y el envío completo Vue → Node → almacenamiento. Los datos de esa prueba se retiraron después de verificar el resultado.
