import ItemListContainer from "../../componentes/ItemListContainer/ItemListContainer";
import NewProductContainer from "../../componentes/NewProductContainer/NewProductContainer";

function Inicio() {
  return (
    <>
      <section className="bienvenida" id="inicio">
        <h1>Bienvenido a CompuMarket</h1>
        <p>Equipos y accesorios para tu computadora. Elegí tus favoritos.</p>
      </section>

      <ItemListContainer />
      <NewProductContainer />
    </>
  );
}

export default Inicio;
