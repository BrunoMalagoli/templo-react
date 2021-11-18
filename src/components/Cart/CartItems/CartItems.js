import React from "react";
import { useCart } from "../../../contexts/CartContext";
const CartItems=({items})=>{
    const {addItem,removeItem}=useCart();
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
            <button itemId={items.id} onClick={removeItem}>-</button>
            <span>{items.addedItems}</span>
            <button itemId={items.id} onClick={addItem}>+</button>
        </div>
    )
}
export default CartItems;