import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./componentes/Layout/Layout";
import DetalleProducto from "./paginas/DetalleProducto/DetalleProducto";
import Inicio from "./paginas/Inicio/Inicio";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos/:productoId" element={<DetalleProducto />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
