import React, { useState } from "react";
import '../ItemCount/ItemCount.scss'
const ItemCount = ({initial,stock,onCart}) =>{
    const [ items , setItems]= useState(0);
    const onAdd =()=>{
        if (stock > items){
        setItems(items+1)
        }
        }
    const onDecrease=()=>{
        if(initial<items){
        setItems(items-1)
            }
        }
    return(
        <>
        <div id='counterContainer'>
                <div id='buttonsContainer'>
            <button className='counterButtons' onClick={onDecrease}>-</button>
                <span id='counterItems'>{items}</span>
            <button className='counterButtons' onClick={onAdd}>+</button>
                </div>
                <button id='counterAdd' onClick={()=>onCart(items)}>Agregar al carrito</button>
        </div>
        </>
    )
}
export default ItemCount;