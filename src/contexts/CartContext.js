import React, { useContext, useState } from "react";
const CartContext = React.createContext();
export function useCart() {
  return useContext(CartContext);
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  //Funcion para agregar items al carro si no estan repetidos, si estan repetidos agrega mas cantidad a su contador
  const addItem = (item, quantity) => {
    const newItem = { ...item, addedItems: quantity }; //Trae todo el objeto item y le agrega una propiedad addedItems que es el contador por si esta repetido
    const isInCart = cart.some((newProd) => newProd.id === item.id); //Funcion para saber si el item ya esta en el Cart
    if (!isInCart) {
      setCart([...cart, newItem]);
    } else {
        const updateCart = [...cart];
        updateCart.forEach((product) => {
          if (product.id === item.id) {
            product.addedItems += 1;
          }
        });
        setCart(updateCart);
    }
    return;
  };
  const plusItem = (item) => {
    const updateCart = [...cart];
    updateCart.forEach((product) => {
      if (product.id === item.id) {
        if (product.addedItems<product.stock) {
            product.addedItems += 1;
            if (cartCounter>=0) {
              setCartCounter(cartCounter+1);
              }  
          }
      }
    });
    setCart(updateCart);
  };
  const minusItem = (item) => {
    const updateCart = [...cart];
    updateCart.forEach((product) => {
      if (product.id === item.id) {
          if (product.addedItems>0) {
            product.addedItems -= 1;
            if (cartCounter>=0) {
              setCartCounter(cartCounter-1);
              }   
          }
      }
    });
    setCart(updateCart);
  };
  const clearItems = () => {
    setCart([]);
    setCartCounter(0);
  };
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addItem,
          minusItem,
          clearItems,
          cartCounter,
          setCartCounter,
          plusItem,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}