import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../CartWidget/CartWidgetSass.scss'
import logo from '../../images/CartWidget.png'
import { useCart } from "../../contexts/CartContext";
const CartWidget =()=>{
    const {cartCounter,cart}=useCart();
    //Quise hacer un preview a modo de carrito desplegable para poder continuar a Cart.js con un boton pero me tira error
    //const [showCartPreview,setShowCartPreview]=useState(false)
    //const showCartItems=({items})=>{
        //console.log(items//)
        //return(
           // <div className="cartItemsWrapper">
                //<img src={items.photo} alt="Botella de bebida alcoholica"/>
                //<h3>
                    //{items.name}
                //</h3>
                //<span>
                //Cantidad:{items.addedItems}
                //</span>
                //<p>
                //Precio (x{items.addedItems} unidades): ${items.price*items.addedItems}
                //</p>
            //</div>
        //)
    //}
    return(
    <>
    <div className="cartWidgetContainer">
    <Link to={`/cart`}><img id="cartWidget" /*onClick={setShowCartPreview(!showCartPreview)}*/ src={logo} alt="Imagen de carrito de compra" /></Link>
    <span id="cartCounter">{cartCounter}</span>   
    </div>
    {/* 
    showCartPreview
    ?<div className="cartPreviewContainer">
        {cart.map(items=><showCartItems items={items} key={items.id}/>)}
    </div>
    :null
    */}

    </>
    )
}
export default CartWidget