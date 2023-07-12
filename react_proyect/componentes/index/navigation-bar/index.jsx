import react from "react"; 
import "./style.css";

const Header = () => {
    return (
      <header className="header">
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">@CLUB CHAMPAGNAT</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="./index.html">INICIO</a>
            <a class="nav-link" href="./html/actividades.html">ACTIVIDADES</a>
            <a class="nav-link" href="./html/gimnasio.html">GIMNASIO</a>
            <a class="nav-link" href="#" >SOCIOS</a>
            <a class="nav-link" href="#" >DEPORTES</a>
            <a class="nav-link" href="./html/productos.html" >PRODUCTOS</a>
            <a class="nav-link" href="./html/contacto.html" >CONTACTO</a>
          </div>
        </div>
      </div>
    </nav>
    <img src="./imagenes/50487715_2178055632273991_2081793123935059968_n.jpg" alt="club champagnat soy mi club logo" class="imagengrande"></img>
      </header>

    )
}

export default Header;