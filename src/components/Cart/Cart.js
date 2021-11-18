import { Link } from "@material-ui/core";
import React from "react";
import { useCart } from "../../contexts/CartContext";
import "../Cart/Cart.scss"
import CartItems from "./CartItems/CartItems";
const Cart=()=>{
    const {cart,clearItems}=useCart();
    return(
        <>
        {cart.length>=1
            ?cart.map(items=>
                <div className="cartItemsWrapper">
                    <CartItems items={items} key={items.id}/>
                </div>
            )
            :<div>
            <h3>
                Agrega items a tu carrito!
            </h3>
            <Link to={`/`}>
             <button>
                Volver a la tienda
             </button>
            </Link>
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