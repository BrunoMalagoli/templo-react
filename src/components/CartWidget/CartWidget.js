import React from "react";
import { Link } from "react-router-dom";
import '../CartWidget/CartWidgetSass.scss'
import logo from '../../images/CartWidget.png'
import { useCart } from "../../contexts/CartContext";
const CartWidget =()=>{
    const {cartCounter}=useCart();
    return(
    <>
    <div className="cartWidgetContainer">
    <Link to={`/cart`}><img id="cartWidget" src={logo} alt="Imagen de carrito de compra" /></Link>
    <span id="cartCounter">{cartCounter}</span>   
    </div>
    </>
    )
}
export default CartWidget