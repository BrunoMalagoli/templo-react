import React, { useState } from "react";
import '../ItemCount/ItemCount.scss'
import Swal from 'sweetalert2'
const ItemCount = ({initial,stock,quantityToAdd,quantity}) =>{
    const [ items , setItems]= useState(0);
    quantity=items;
    const onAdd =()=>{
        if (stock > items){
        setItems(items+1)
        quantityToAdd=(quantity)=>{
        return quantity+1
        }
        }
    }
    const onDecrease=()=>{
        if(initial<items){
        setItems(items-1)
        quantityToAdd=(quantity)=>{
            return quantity-1
            }
        }
    }
    const onCart=()=>{
        if(items>=1){
            Swal.fire({
                title: 'Agregado a tu carrito!',
                toast: true,
                showConfirmButton: false,
                timerProgressBar:true,
                timer:1500,
                position:'bottom-end',
                background: 'rgb(255, 221, 84)',
                icon:'success'
              })
        }else{
            Swal.fire({
                text:"Agrega productos a tu carrito!",
                icon:'error'
            })  
        }
    }
    return(
        <>
        <div id='counterContainer'>
                <div id='buttonsContainer'>
            <button className='counterButtons' onClick={onDecrease}>-</button>
                <span id='counterItems'>{quantity}</span>
            <button className='counterButtons' onClick={onAdd}>+</button>
                </div>
                <button id='counterAdd' onClick={onCart}>Agregar al carrito</button>
        </div>
        </>
    )
}
export default ItemCount;