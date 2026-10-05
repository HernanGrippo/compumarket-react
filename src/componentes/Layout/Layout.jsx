import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="pagina">
      <Header />
      <main className="contenido">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
