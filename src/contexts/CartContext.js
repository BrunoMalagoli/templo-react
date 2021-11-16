import React,  {useContext, useState } from "react";
const CartContext=React.createContext();

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [cart,setCart]=useState([]);
    const [cartCounter,setCartCounter]=useState(0);
    //Funcion para agregar items al carro si no estan repetidos, si estan repetidos agrega mas cantidad a su contador
    const addItem=(item,quantity)=>{
        const newItem={...item, addedItems:quantity};//Trae todo el objeto item y le agrega una propiedad addedItems que es el contador por si esta repetido
        const isInCart=cart.some((newProd)=>newProd.id===item.id);//Funcion para saber si el item ya esta en el Cart
        if(!isInCart){
            setCart([...cart,newItem]);
            console.log(newItem)
        }else{
            let duplicatedItem=cart.find(newProd=>newProd.id===item.id);
            duplicatedItem={duplicatedItem,addedItems:quantity}
            setCart([...cart,duplicatedItem])
            console.log(duplicatedItem)
            console.log(cart)
        }
        return ;
    }
    const removeItem=(itemId,item)=>{
        setCart(cart.splice(itemId===item.id));
    }
    const clearItems=()=>{
        setCart([])
    }

    return(
        <>
        <CartContext.Provider value={{cart,setCart, addItem, removeItem, clearItems,cartCounter,setCartCounter}}>
            {children}
        </CartContext.Provider>
        </>
    )
}
