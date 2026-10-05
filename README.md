# CompuMarket - Preentrega

E-commerce desarrollado con React y Vite. Incluye un catálogo cargado desde un
archivo JSON local, tarjetas de producto reutilizables, formulario de alta,
información del equipo y vistas de detalle con React Router.

## Enlaces

- Aplicación: https://compumarket-react.netlify.app
- Repositorio: https://github.com/HernanGrippo/compumarket-react

## Funcionalidades

- Catálogo cargado con `fetch` y `useEffect`.
- Componentes `Item` e `ItemListContainer`.
- Formulario con estado de carga.
- Subida de imágenes a ImgBB y generación de una URL pública.
- Layout reutilizable con encabezado, navegación y pie de página.
- Página de inicio y detalle de cada producto.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Para habilitar la subida de imágenes, copiá `.env.example` como `.env` y agregá
tu API key de ImgBB. El archivo `.env` no se incluye en el repositorio.

## Generar la versión de producción

```bash
npm run build
```

Los archivos preparados para publicar se generan en la carpeta `dist`.
