import { useState } from "react";
import ItemListContainer from "../../componentes/ItemListContainer/ItemListContainer";
import NewProductContainer from "../../componentes/NewProductContainer/NewProductContainer";
import {
  guardarProductosLocales,
  obtenerProductosLocales,
} from "../../utilidades/productosLocales";

function Inicio() {
  const [productosAgregados, setProductosAgregados] = useState(
    obtenerProductosLocales,
  );

  function agregarProducto(producto) {
    setProductosAgregados((productosActuales) => {
      const productosSinRepetir = productosActuales.filter(
        (item) => String(item.id) !== String(producto.id),
      );
      const productosActualizados = [producto, ...productosSinRepetir];

      guardarProductosLocales(productosActualizados);
      return productosActualizados;
    });
  }

  return (
    <>
      <section className="bienvenida" id="inicio">
        <h1>Bienvenido a CompuMarket</h1>
        <p>Equipos y accesorios para tu computadora. Elegí tus favoritos.</p>
      </section>

      <ItemListContainer productosAgregados={productosAgregados} />
      <NewProductContainer onProductoCreado={agregarProducto} />
    </>
  );
}

export default Inicio;
