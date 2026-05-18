# Yohaku

Landing comercial en `Next.js + Tailwind CSS` para Yohaku, enfocada en venta mayorista y minorista de muebles con catálogos PDF y consultas por WhatsApp.

## Stack

- `Next.js` con `App Router`
- `Tailwind CSS`
- Componentes separados y datos editables
- Formularios preparados con capa desacoplada de leads

## Estructura principal

- `app/`: layout global, página principal y estilos
- `components/`: secciones reutilizables de la landing
- `data/site-data.ts`: textos comerciales, links y colecciones editables
- `public/catalogs/`: PDFs listos para reemplazar o reutilizar
- `public/images/`: placeholders visuales
- `services/lead-service.ts`: capa desacoplada para newsletter y contacto

## Puesta en marcha

Instalá dependencias y levantá el proyecto:

```bash
npm install
npm run dev
```

Si preferís otro package manager, podés usar `pnpm`, `yarn` o `bun`.

## Qué editar primero

1. `data/site-data.ts`
   Reemplazá:
   - `whatsappUrl`
   - links de catálogos
   - textos comerciales si querés

2. `public/images/*`
   Cambiá los placeholders por fotos reales o renders de producto/ambientación.

3. `services/lead-service.ts`
   Si querés cambiar el destino de los leads, podés reemplazar la persistencia local por el backend o servicio que uses.

## Deploy

El proyecto queda preparado para deploy en Vercel con los scripts:

- `npm run build`
- `npm run start`
