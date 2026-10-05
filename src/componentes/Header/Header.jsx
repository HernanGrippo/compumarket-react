import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="barra-titulo">
        <h2>CompuMarket</h2>
      </div>

      <nav className="nav" aria-label="Navegación principal">
        <NavLink to="/">Inicio</NavLink>
        <Link to="/#productos">Productos</Link>
        <Link to="/#nuevo-producto">Nuevo producto</Link>
        <Link to="/#equipo">Equipo</Link>
        <Link to="/#contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
