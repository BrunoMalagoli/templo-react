import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "../Cart/Cart.scss"
import CartItems from "./CartItems/CartItems";
const Cart=()=>{
    const { cart,clearItems, totalPrice } = useCart();
    return(
        <>
        {cart.length>=1
            ?cart.map(items=>
                <div key={items.id} className="cartItemsWrapper">
                    <CartItems items={items}/>
                </div>
            )
            :<div className="cartItemsEmptyWrapper">
            <h3 className="cartItemsEmptyTitle">
                Agrega items a tu carrito!
            </h3>
            { <Link to={`/`}>
             <button className="cartItemsEmptyButton">
                Volver a la tienda
             </button>
            </Link> }
            </div>
            }
        {
        cart.length>=1
        ?   <div className="cartFormWrapper">
            <span id="cartFormTitle">Finaliza tu compra</span>
        <label htmlFor="cartFormName">Nombre completo</label>
            <input id="cartFormName" type="text" />
            <label htmlFor="cartFormMail">Correo electrónico</label>
            <input id="cartFormMail" type="email" />
            <label htmlFor="cartFormTel">Número telefónico</label>
            <input id="cartFormTel" type="tel" /> 
        <button className="clearButton" onClick={clearItems}>Vaciar el carrito</button>
        <input id="cartFormSubmit" type="submit" value="Realizar el pedido!"  />
            <span className="cartFormTotalPrice">Precio total: {`${totalPrice}`}</span>
            </div>
        :null
        }
        </>
    )
}
export default Cart