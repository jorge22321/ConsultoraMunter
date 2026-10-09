# Consultora Munter & Asociados

Sitio de consultoría en español. El frontend está hecho con Vue 3, TypeScript y Vue Router. El backend usa Node.js y Express; Vercel utiliza una función Node para registrar consultas en un Blob privado.

El diseño actual es propio, con paleta negro, dorado y grises cálidos. Las imágenes tienen fuentes documentadas en [docs/ASSET_LICENSES.md](docs/ASSET_LICENSES.md). El sitio activo no carga código, estilos, fuentes ni imágenes de Wix.

## Desarrollo local

Requiere Node.js 22.18 o superior. En dos terminales:

```powershell
npm ci --prefix backend
npm run dev --prefix backend
```

```powershell
npm ci --prefix frontend
npm run dev --prefix frontend
```

Frontend: http://127.0.0.1:5173. Backend: http://127.0.0.1:3000. Vite redirige las peticiones `/api` al backend.

## Compilación y pruebas

```powershell
npm run build --prefix frontend
npm test --prefix backend
```

El backend sirve el frontend compilado y la API desde el puerto 3000. `docker compose up --build -d` construye ambos y guarda las consultas en un volumen privado. Los parámetros locales están en `backend/.env.example`.

## Despliegue

`vercel.json` compila `frontend/dist`, sirve la API en `/api/consultas` y configura cabeceras de seguridad. Es imprescindible conectar un almacén **Vercel Blob privado** y configurar `BLOB_READ_WRITE_TOKEN`. Si falta, el formulario informa que no está disponible.

Las alertas por correo son opcionales y se activan con `RESEND_API_KEY`, `NOTIFICATION_FROM` (remitente de dominio verificado) y `NOTIFICATION_TO` (por defecto `consultoramunteryasociados@gmail.com`). El correo de aviso contiene únicamente el código y el área, no el mensaje ni los datos personales. Si el aviso falla, la consulta registrada permanece en el almacén. Sin esas variables, el formulario registra consultas pero **no envía avisos**.

En Docker, el archivo `backend/data/consultas.jsonl` o el volumen `munter-consultas` conserva los registros. En Vercel se guardan como `consultas/<id>.json` en Blob privado. No existe una API pública que liste las consultas. Consulta [docs/ENTREGA.md](docs/ENTREGA.md) para la operación y los pendientes antes de vender o transferir.

## Mantenimiento

- `frontend/src/data/content.ts`: servicios, teléfono y dirección.
- `frontend/src/components/`: navegación, tarjetas, portada interior, pie y formulario reutilizables.
- `frontend/src/views/`: páginas Vue.
- `frontend/src/style.css`: estilos propios y reglas responsivas.
- `backend/app.js`: API Docker.
- `api/consultas.js`: API Vercel.
- `backend/notify.js`: aviso opcional.
- `docs/ASSET_LICENSES.md`: procedencia de imágenes.

El formulario valida contenido y consentimiento, incluye campo antispam y limita solicitudes por IP. En Vercel el límite es por instancia de función, por lo que **no reemplaza** una protección compartida de producción. No se publican datos personales en logs.
