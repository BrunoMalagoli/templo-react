import React,  { useContext, useState } from "react";
const CartContext=React.createContext();

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [cart,setCart]=useState([]);
    //Funckion para agregar items al carro si no estan repetidos, si estan repetidos agrega mas cantidad a su contador
    // eslint-disable-next-line no-unused-vars
    const addItem=(item,quantity)=>{
        const newItem={...item, addedItems:quantity};//Trae todo el objeto item y le agrega una propiedad addedItems que es el contador por si esta repetido
        const isInCart=cart.some((newProd)=>newProd.id===item.id);//Funcion para saber si el item ya esta en el Cart
        if(!isInCart){
            setCart(...cart,newItem);
        }else{
            const duplicatedItem=cart.find(newProd=>newProd.id===item.id);
            duplicatedItem.addedItems=duplicatedItem.addedItems+quantity;
        }
        return;
    }
    return(
        <>
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
        </>
    )
}
