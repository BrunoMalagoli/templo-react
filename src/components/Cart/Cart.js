import { Link } from "@material-ui/core";
import React from "react";
import { useCart } from "../../contexts/CartContext";
import "../Cart/Cart.scss"
const Cart=()=>{
    const {addItem,cart,removeItem,clearItems}=useCart();
    const CartItems=({items})=>{
        return(
            <div className="cartItemsWrapper">
                <img src={items.photo} alt="Botella de bebida alcoholica"/>
                <h3>
                    {items.name}
                </h3>
                <span>
                Cantidad:{items.addedItems}
                </span>
                <p>
                Precio (x{items.addedItems} unidades): ${items.price*items.addedItems}
                </p>
                <button itemId={items.id} item={items} onClick={removeItem}>-</button>
                <span>{items.addedItems}</span>
                <button itemId={items.id} onClick={addItem}>+</button>
            </div>
        )
    }
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