import React from "react";
import { useCart } from "../../../contexts/CartContext";
const CartItems=({items})=>{
    const { plusItem, minusItem } = useCart();
    console.log('items', items)
    return(
        <div className="cartItemsWrapper">
            <img src={items.photo} alt="Botella de bebida alcoholica"/>
            <h3>
                {items.name}
            </h3>
            <span>
            Cantidad:{items.addedItems}
            </span>
            <br/>
            <span>
            Hay {items.stock} {items.name} en stock!🚩
            </span>
            <p>
            Precio (x{items.addedItems} unidades): ${items.price*items.addedItems}
            </p>
            <button onClick={()=>minusItem(items)}>-</button>
            <span>{items.addedItems}</span>
            <button onClick={()=>plusItem(items)}>+</button>
        </div>
    )
}
export default CartItems;