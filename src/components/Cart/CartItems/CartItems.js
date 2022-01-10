import React from "react";
import { useCart } from "../../../contexts/CartContext";
import "../CartItems/CartItems.scss"
import { Tooltip } from "@mui/material";
const CartItems=({items})=>{
    const { plusItem, minusItem, totalPrice } = useCart();
    return(
        <Tooltip arrow placement="bottom" title={`Hay ${items.stock} ${items.name} en stock!🚩`}>
        <div className="cartItemsContainer">
            <img className="cartItemsImg" src={items.photo} alt="Botella de bebida alcoholica"/>
            <h3 className="cartItemsTitle">
                {items.name}
            </h3>
            <span className="cartItemsQuantity">
            Cantidad:{items.addedItems}
            </span>
            <br/>
            <p className="cartItemsPrice">
            Precio (x{items.addedItems} u): ${items.price*items.addedItems}
            </p>
            <button className="cartItemsButtons" onClick={()=>minusItem(items)}>-</button>
            <span className="cartItemsCounter">{items.addedItems}</span>
            <button className="cartItemsButtons" onClick={()=>plusItem(items)}>+</button>
            <span>{totalPrice}</span>
        </div>
        </Tooltip>
    )
}
export default CartItems;