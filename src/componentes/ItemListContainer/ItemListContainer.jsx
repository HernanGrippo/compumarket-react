import { useEffect, useState } from "react";
import Item from "../Item/Item";
import estilos from "./ItemListContainer.module.css";
import { combinarProductos } from "../../utilidades/productosLocales";

function ItemListContainer({ productosAgregados }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch("/data/productos.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el catálogo");
        }

        const datos = await respuesta.json();
        setProductos(datos);
      } catch (errorDeCarga) {
        setError(errorDeCarga.message);
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  const catalogo = combinarProductos(productos, productosAgregados);

  return (
    <section className="catalogo" id="productos">
      <h2>Productos destacados</h2>

      {cargando && <p className={estilos.mensaje}>Cargando productos...</p>}
      {error && <p className={estilos.error}>Error: {error}</p>}

      {!cargando && !error && (
        <div className="lista-productos">
          {catalogo.map((producto) => (
            <Item key={producto.id} {...producto} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ItemListContainer;
