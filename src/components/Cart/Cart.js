import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "../Cart/Cart.scss"
import CartItems from "./CartItems/CartItems";
const Cart=()=>{
    const {cart,clearItems}=useCart();
    return(
        <>
        {cart.length>=1
            ?cart.map(items=>
                <div key={items.id} className="cartItemsWrapper">
                    <CartItems items={items}/>
                </div>
            )
            :<div>
            <h3>
                Agrega items a tu carrito!
            </h3>
            { <Link to={`/`}>
             <button>
                Volver a la tienda
             </button>
            </Link> }
            </div>
            }
        {
        cart.length>=1
        ?<button onClick={clearItems}>Vaciar el carrito</button>
        :null
        }
        </>
    )
}
export default Cart