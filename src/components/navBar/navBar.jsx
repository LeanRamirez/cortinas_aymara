import React from "react";
import style from "./navBar.module.css"
import logo from "../../assets/logo.jpg";

const NavBar = ()=>{
    return(
        <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
  <div className={`container-fluid ${style.container}`}>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img src={logo} alt="logo" />
    <div className="dropdown d-md-none">
      <a href="#" className="btn bg-gradient-dark dropdown-toggle" data-bs-toggle="dropdown" id="navbarDropdownMenuLink2">
        Menu
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
        <li>
          <a className="dropdown-item" href="#">Trabajos</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Contacto</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Redes</a>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse d-none d-md-block" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Trabajos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="#">Redes</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    )
}
export default NavBar;