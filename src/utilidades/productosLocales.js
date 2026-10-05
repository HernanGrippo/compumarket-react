const CLAVE_PRODUCTOS = "compumarket-productos";

function obtenerProductosLocales() {
  try {
    const productosGuardados = localStorage.getItem(CLAVE_PRODUCTOS);
    const productos = productosGuardados ? JSON.parse(productosGuardados) : [];

    return Array.isArray(productos) ? productos : [];
  } catch {
    return [];
  }
}

function guardarProductosLocales(productos) {
  localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(productos));
}

function combinarProductos(productosBase, productosAgregados = []) {
  const idsAgregados = new Set(
    productosAgregados.map((producto) => String(producto.id)),
  );
  const productosSinRepetir = productosBase.filter(
    (producto) => !idsAgregados.has(String(producto.id)),
  );

  return [...productosAgregados, ...productosSinRepetir];
}

export {
  combinarProductos,
  guardarProductosLocales,
  obtenerProductosLocales,
};
