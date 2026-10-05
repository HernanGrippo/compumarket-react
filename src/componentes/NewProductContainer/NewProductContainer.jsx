import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import estilos from "./NewProductContainer.module.css";

async function subirImagenAImgBB(archivo) {
  const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

  if (!apiKey) {
    throw new Error("Falta configurar la API key de ImgBB");
  }

  const formulario = new FormData();
  formulario.append("image", archivo);

  const respuesta = await fetch(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    {
      method: "POST",
      body: formulario,
    },
  );

  const resultado = await respuesta.json();

  if (!respuesta.ok || !resultado.success) {
    throw new Error(resultado.error?.message ?? "No se pudo subir la imagen");
  }

  return resultado.data.url;
}

function formatearPrecio(precio) {
  return `$${Number(precio).toLocaleString("es-AR")}`;
}

function NewProductContainer({ onProductoCreado }) {
  const [productoSubido, setProductoSubido] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagen, setImagen] = useState(null);

  function manejarCambioImagen(evento) {
    setImagen(evento.target.files[0] ?? null);
  }

  async function handleFormSubmit(datosProducto) {
    setLoading(true);
    setError(null);

    try {
      if (!imagen) {
        throw new Error("Seleccioná una imagen");
      }

      const imagenSubida = await subirImagenAImgBB(imagen);

      const productoGuardado = {
        id: Number(datosProducto.id),
        nombre: datosProducto.nombre,
        precio: formatearPrecio(datosProducto.precio),
        stock: Number(datosProducto.stock),
        imagen: imagenSubida,
        categoria: "Producto nuevo",
        descripcion: "Producto agregado desde el formulario de CompuMarket.",
      };

      setProductoSubido(productoGuardado);
      onProductoCreado(productoGuardado);
    } catch (errorDeCarga) {
      setError(errorDeCarga.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={estilos.contenedor} id="nuevo-producto">
      <h2>Nuevo producto</h2>
      <ProductForm
        loading={loading}
        manejarCambioImagen={manejarCambioImagen}
        onSubmit={handleFormSubmit}
      />

      {error && <p className={estilos.error}>Error: {error}</p>}

      {productoSubido && (
        <div className={estilos.resultado}>
          <img src={productoSubido.imagen} alt={productoSubido.nombre} />
          <div>
            <strong>{productoSubido.nombre}</strong>
            <p>Id: {productoSubido.id}</p>
            <p>{productoSubido.precio}</p>
            <p>Stock: {productoSubido.stock}</p>
            <a
              href={productoSubido.imagen}
              target="_blank"
              rel="noreferrer"
            >
              Abrir imagen en ImgBB
            </a>
            <small>Producto guardado correctamente.</small>
          </div>
        </div>
      )}
    </section>
  );
}

export default NewProductContainer;
