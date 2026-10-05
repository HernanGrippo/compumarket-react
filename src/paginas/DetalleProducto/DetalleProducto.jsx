import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import estilos from "./DetalleProducto.module.css";

function DetalleProducto() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarProducto() {
      try {
        const respuesta = await fetch("/data/productos.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el catálogo");
        }

        const productos = await respuesta.json();
        const productoEncontrado = productos.find(
          (item) => item.id === Number(productoId),
        );
        setProducto(productoEncontrado ?? null);
      } catch (errorDeCarga) {
        setError(errorDeCarga.message);
      } finally {
        setCargando(false);
      }
    }

    cargarProducto();
  }, [productoId]);

  if (cargando) {
    return <p className={estilos.mensaje}>Cargando producto...</p>;
  }

  if (error) {
    return <p className={estilos.mensaje}>Error: {error}</p>;
  }

  if (!producto) {
    return (
      <section className={estilos.noEncontrado}>
        <h1>Producto no encontrado</h1>
        <p>El producto que buscás no existe o ya no está disponible.</p>
        <Link to="/">Volver al inicio</Link>
      </section>
    );
  }

  return (
    <section className={estilos.detalle}>
      <Link className={estilos.volver} to="/">
        ← Volver a productos
      </Link>

      <div className={estilos.contenido}>
        <img src={producto.imagen} alt={producto.nombre} />
        <div>
          <span className={estilos.categoria}>{producto.categoria}</span>
          <h1>{producto.nombre}</h1>
          <p className={estilos.precio}>{producto.precio}</p>
          <p>{producto.descripcion}</p>
          <p>
            <strong>Stock disponible:</strong> {producto.stock} unidades
          </p>
          <button type="button">Añadir al carrito</button>
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;
