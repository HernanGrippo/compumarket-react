import { useState } from "react";
import estilos from "./ProductForm.module.css";

function ProductForm({ loading, onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);

  function handleSubmit(evento) {
    evento.preventDefault();
    onSubmit({ nombre, precio, imagen });
  }

  return (
    <form className={estilos.formulario} onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
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
          required
        />
      </label>

      <label>
        Imagen
        <input
          type="file"
          accept="image/*"
          onChange={(evento) => setImagen(evento.target.files[0])}
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
