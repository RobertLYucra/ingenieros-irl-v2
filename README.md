# YR Ingenieros E.I.R.L.

Sitio corporativo desarrollado con React, TypeScript y Vite.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Validación

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Variables de entorno

Copia `.env.example` a `.env.local` y configura:

- `VITE_SITE_URL`: dominio público usado por metadatos y enlaces canónicos.
- `VITE_CONTACT_API_URL`: endpoint de producción para recibir solicitudes de cotización.

Antes de publicar, confirma el dominio y los datos corporativos centralizados en `src/shared/data/site.ts`.
