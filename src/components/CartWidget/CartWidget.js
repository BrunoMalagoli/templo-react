import React from "react";
import '../CartWidget/CartWidgetSass.scss'
import logo from '../../images/CartWidget.png'

const CartWidget =()=>{
    return(
    <div className="cartWidgetContainer">
    <img id="cartWidget" src={logo} alt="Imagen de carrito de compra" />   
    </div>    
    )
}
export default CartWidget