/* eslint-disable no-unused-vars */
import React,  { useContext, useState } from "react";
const CartContext=React.createContext();

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [cart,setCart]=useState([]);
    //Funcion para agregar items al carro si no estan repetidos, si estan repetidos agrega mas cantidad a su contador
    const addItem=(item,quantity)=>{
        const newItem={...item, addedItems:quantity};//Trae todo el objeto item y le agrega una propiedad addedItems que es el contador por si esta repetido
        const isInCart=cart.some((newProd)=>newProd.id===item.id);//Funcion para saber si el item ya esta en el Cart
        if(!isInCart){
            setCart(...cart,newItem);
        }else{
            const duplicatedItem=cart.find(newProd=>newProd.id===item.id);
            duplicatedItem.addedItems=duplicatedItem.addedItems+quantity;
            console.log(cart)
        }
        console.log(cart)
        return;
    }
    const removeItem=(itemId,{item})=>{
        cart.splice(itemId===item.id);
    }
    const clearItems=()=>{
        setCart([])
    }

    return(
        <>
        <CartContext.Provider value={{cart, addItem, removeItem, clearItems}}>
            {children}
        </CartContext.Provider>
        </>
    )
}
