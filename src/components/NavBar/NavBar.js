import {React} from "react";
import '../NavBar/NavBar.scss'
import logoTemplo from "../../images/eltemploLogo.png"
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom"
const NavBar =()=>{
    return(   
    <nav className="navBar">
        <div id="navBarLogoContainer">
      <Link to={`/`}><img id="navBarLogo" src={logoTemplo} alt="Logo EL TEMPLO" /></Link>
        </div>
    <ul className="navBarUl">
      <ul id="navBarProductos" className="navBarLi"><NavLink className="navBarLiAnchor" to={`/`}>Productos</NavLink>
        <ul id="navBarLiDropdownContainer">
      <li className="navBarLiDropdown" ><NavLink to={`/category/whiskys`} className="navBarLiDropdownAnchor" activeClassName="navBarLiDropdownActive">Whiskys</NavLink></li>
      <li className="navBarLiDropdown" ><NavLink to={`/category/espumantes` }className="navBarLiDropdownAnchor" activeClassName="navBarLiDropdownActive">Espumantes</NavLink></li>
      <li className="navBarLiDropdown" ><NavLink to={`/category/aperitivos`} className="navBarLiDropdownAnchor" activeClassName="navBarLiDropdownActive">Aperitivos</NavLink></li>
      <li className="navBarLiDropdown" ><NavLink to={`/category/vinos`} className="navBarLiDropdownAnchor" activeClassName="navBarLiDropdownActive">Vinos</NavLink></li>
        </ul>
      </ul>
      <li id="navBarContacto" className="navBarLi">Contacto</li>  
    </ul>
    <CartWidget/>
     </nav>    
    )
}
export default NavBar
