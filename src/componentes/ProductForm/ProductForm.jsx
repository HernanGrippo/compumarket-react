import { useState } from "react";
import estilos from "./ProductForm.module.css";

function ProductForm({ loading, onSubmit }) {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState(null);

  function handleSubmit(evento) {
    evento.preventDefault();
    onSubmit({ id, nombre, precio, stock, imagen });
  }

  return (
    <form className={estilos.formulario} onSubmit={handleSubmit}>
      <label>
        Id
        <input
          type="number"
          min="1"
          value={id}
          onChange={(evento) => setId(evento.target.value)}
          disabled={loading}
          required
        />
      </label>

      <label>
        Nombre del producto
        <input
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          disabled={loading}
          required
        />
      </label>

      <label>
        Precio
        <input
          type="number"
          min="0"
          value={precio}
          onChange={(evento) => setPrecio(evento.target.value)}
          disabled={loading}
          required
        />
      </label>

      <label>
        Stock
        <input
          type="number"
          min="0"
          value={stock}
          onChange={(evento) => setStock(evento.target.value)}
          disabled={loading}
          required
        />
      </label>

      <label>
        Imagen
        <input
          type="file"
          accept="image/*"
          onChange={(evento) => setImagen(evento.target.files[0])}
          disabled={loading}
          required
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Subiendo imagen..." : "Guardar producto"}
      </button>

      {loading && <p role="status">Procesando la imagen, esperá un momento.</p>}
    </form>
  );
}

export default ProductForm;
