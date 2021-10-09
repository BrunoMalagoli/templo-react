import React from "react";
import './styles/NavBarSass.scss'
import logoTemplo from "../images/eltemploLogo.png"
const NavBar =()=>{
    return(   
    <nav className="navBar">
        <div id="navBarLogoContainer">
        <img id="navBarLogo" src={logoTemplo} alt="Logo EL TEMPLO" />
        </div>
    <ul className="navBarUl">
      <li id="navBarInicio" className="navBarLi">Inicio</li>
      <li id="navBarProductos" className="navBarLi">Productos</li>
      <li id="navBarContacto" className="navBarLi">Contacto</li>  
    </ul>
     </nav>    
    )
}
export default NavBar