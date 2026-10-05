import estilos from "./TarjetaContacto.module.css";

function TarjetaContacto({ foto, nombre, puesto, email }) {
  return (
    <article className={estilos.tarjeta}>
      <img className={estilos.foto} src={foto} alt={`Foto de ${nombre}`} />
      <h3>{nombre}</h3>
      <p className={estilos.puesto}>{puesto}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </article>
  );
}

export default TarjetaContacto;
