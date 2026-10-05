import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import estilos from "./NewProductContainer.module.css";

function leerImagen(archivo) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();

    lector.onload = () => resolve(lector.result);
    lector.onerror = () => reject(new Error("No se pudo leer la imagen"));
    lector.readAsDataURL(archivo);
  });
}

function NewProductContainer() {
  const [productoSubido, setProductoSubido] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(datosProducto) {
    setLoading(true);
    setError(null);

    try {
      const imagenProcesada = await leerImagen(datosProducto.imagen);

      // Simula el tiempo que tardaría un servicio en subir la imagen.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setProductoSubido({
        id: datosProducto.id,
        nombre: datosProducto.nombre,
        precio: datosProducto.precio,
        stock: datosProducto.stock,
        imagen: imagenProcesada,
      });
    } catch (errorDeCarga) {
      setError(errorDeCarga.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={estilos.contenedor} id="nuevo-producto">
      <h2>Nuevo producto</h2>
      <ProductForm loading={loading} onSubmit={handleFormSubmit} />

      {error && <p className={estilos.error}>Error: {error}</p>}

      {productoSubido && (
        <div className={estilos.resultado}>
          <img src={productoSubido.imagen} alt={productoSubido.nombre} />
          <div>
            <strong>{productoSubido.nombre}</strong>
            <p>Id: {productoSubido.id}</p>
            <p>${productoSubido.precio}</p>
            <p>Stock: {productoSubido.stock}</p>
            <small>Producto guardado correctamente.</small>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewProductContainer;
