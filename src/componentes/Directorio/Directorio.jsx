import { useEffect, useState } from "react";
import TarjetaContacto from "../TarjetaContacto/TarjetaContacto";
import estilos from "./Directorio.module.css";

function Directorio() {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarNosotros() {
      try {
        const respuesta = await fetch("/data/nosotros.json");

        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el archivo de contactos");
        }

        const datos = await respuesta.json();
        setNosotros(datos);
      } catch (errorDeCarga) {
        setError(errorDeCarga.message);
      } finally {
        setCargando(false);
      }
    }

    cargarNosotros();
  }, []);

  if (cargando) {
    return <p className={estilos.mensaje}>Cargando equipo...</p>;
  }

  if (error) {
    return <p className={estilos.error}>Error: {error}</p>;
  }

  return (
    <section className={estilos.directorio} id="equipo">
      <h2>Nuestro equipo</h2>
      <div className={estilos.grilla}>
        {nosotros.map((persona) => (
          <TarjetaContacto
            key={persona.id}
            nombre={persona.nombre}
            email={persona.email}
            puesto={persona.puesto}
            foto={persona.foto}
          />
        ))}
      </div>
    </section>
  );
}

export default Directorio;
