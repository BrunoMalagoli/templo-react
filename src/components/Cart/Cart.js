import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "../Cart/Cart.scss";
import CartItems from "./CartItems/CartItems";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { getFirestore } from "../../firebase";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
const Cart = () => {
  const { cart, clearItems, setCart, setCartCounter } = useCart();
  const [order, setOrder] = useState([]);
  const history = useHistory();
  const {register, handleSubmit, formState: { errors } } = useForm();
  const totalPrice = () =>
    cart.reduce((acc, item) => (acc += item.price * item.addedItems), 0);
  let cartPrice = totalPrice();
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
     const orden = { 
    buyer: order,
    items: cart,
    total: cartPrice,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orden)
      .then(({ id }) => {
        cart.forEach((item) => {
          const db = getFirestore();
          const docRef = doc(db, "items", item.id);
          updateDoc(docRef, { stock: item.stock - item.addedItems });
        });
        Swal.fire({
          title: `Compra exitosa! Tu ID de compra es: ${id} !`, 
          showConfirmButton: true,
          confirmButtonText: "Entendido!",
          confirmButtonColor: "rgb(255, 221, 84)",
          iconColor: "rgb(255, 221, 84)",
          background: "#fffff",
          icon: "success",
          allowOutsideClick: false,
        });
      })
      .catch(() => { 
        Swal.fire({
          text: "Algo salió mal, por favor vuelve a intentarlo.",
          icon: "error",
        });
      })
      .then(() => { 
        setCart([]);
        setCartCounter(0);
        history.push("/");
      });
  }
  return (
    <>
      {cart.length >= 1 ? (
        cart.map((items) => (
          <div key={items.id} className="cartItemsWrapper">
            <CartItems items={items} />
          </div>
        ))
      ) : (
        <div className="cartItemsEmptyWrapper">
          <h3 className="cartItemsEmptyTitle">Agrega items a tu carrito!</h3>
          {
            <Link to={`/`}>
              <button className="cartItemsEmptyButton">
                Volver a la tienda
              </button>
            </Link>
          }
        </div>
      )}
      {cart.length >= 1 ? (
        <form className="cartFormWrapper" onSubmit={handleSubmit(handleFormSubmit)}>
          <span id="cartFormTitle">Finaliza tu compra</span>
          <label htmlFor="cartFormName">Nombre completo</label>
          <input
            id="cartFormName"
            onChange={(e) => handleChange(e)}
            name="name"
            type="text"
            {...register("formName", {required: "true" , minLength: 2})}
          />
          {errors.formName && <Alert className="formError" severity="error">Por favor, completa este campo</Alert>}
          <label htmlFor="cartFormMail">Correo electrónico</label>
          <input
            id="cartFormMail"
            onChange={(e) => handleChange(e)}
            name="mail"
            type="email"
            {...register("formMail", { required: "true" , minLength: 4, pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })}
          />
          {errors.formMail && <Alert className="formError" severity="error">Se requiere una dirección de correo válida</Alert>}
          <label htmlFor="cartFormTel">Número telefónico</label>
          <input
            id="cartFormTel"
            onChange={(e) => handleChange(e)}
            name="phone"
            type="tel"
            {...register("formTel", { required: "true" , pattern:/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/})}
          />
          {errors.formName && <Alert className="formError" severity="error">Se requiere un número telefónico valido</Alert>}
          <button className="clearButton" onClick={clearItems}>
            Vaciar el carrito
          </button>
          <button className="cartFormSubmit" type="submit">
            Realizar la compra!
          </button>
          <span className="cartFormTotalPrice">Precio total: {cartPrice}</span>
        </form>
      ) : null}
    </>
  );
};
export default Cart;