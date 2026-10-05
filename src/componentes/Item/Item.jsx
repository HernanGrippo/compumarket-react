import { useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Item.module.css";

function Item({ id, imagen, nombre, precio }) {
  const [esFavorito, setEsFavorito] = useState(false);

  function marcarComoFavorito() {
    setEsFavorito(!esFavorito);
  }

  return (
    <article className={estilos.tarjeta}>
      <Link className={estilos.enlaceProducto} to={`/productos/${id}`}>
        <img className={estilos.imagen} src={imagen} alt={nombre} />
        <h3 className={estilos.nombre}>{nombre}</h3>
      </Link>
      <p className={estilos.precio}>{precio}</p>

      <div className={estilos.acciones}>
        <Link className={estilos.boton} to={`/productos/${id}`}>
          Ver detalle
        </Link>
        <button
          className={estilos.favorito}
          type="button"
          onClick={marcarComoFavorito}
          aria-pressed={esFavorito}
          aria-label={esFavorito ? "Quitar de favoritos" : "Marcar como favorito"}
          title={esFavorito ? "Quitar de favoritos" : "Marcar como favorito"}
        >
          {esFavorito ? "★" : "☆"}
        </button>
      </div>
    </article>
  );
}

export default Item;
