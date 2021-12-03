import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "../Cart/Cart.scss"
import CartItems from "./CartItems/CartItems";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "../../firebase";
import Swal from 'sweetalert2'
const Cart=()=>{
    const { cart,clearItems } = useCart();
    const [order, setOrder] = useState([]);
    const [orderId, setOrderId] = useState();
    const totalPrice = () => cart.reduce((acc, item) => (acc += item.price * item.addedItems), 0)
    let cartPrice = totalPrice();
    const handleChange = (e) =>{
        setOrder({buyer:{...order,[e.target.name]:e.target.value}, items: cart, total:cartPrice})
        console.log(order)
    }
    const handleSubmit = (e) =>{
        e.preventDefalut();
        const db = getFirestore();
        const ordersCollection = collection(db,"orders");
        addDoc(ordersCollection, order)
        .then(({ id }) =>
        setOrderId(id),
        Swal.fire({
            title: `Compra exitosa! Tu ID de compra es: ${orderId} !`,
            showConfirmButton: true,
            background: "rgb(255, 221, 84)",
            icon: "success",
          }))
        
        .catch(
            Swal.fire({
                text: "Algo salió mal, por favor vuelve a intentarlo.",
                icon: "error",
              })
        );
    }
    return(
        <>
        {cart.length>=1
            ?cart.map(items=>
                <div key={items.id} className="cartItemsWrapper">
                    <CartItems items={items}/>
                </div>
            )
            :<div className="cartItemsEmptyWrapper">
            <h3 className="cartItemsEmptyTitle">
                Agrega items a tu carrito!
            </h3>
            { <Link to={`/`}>
             <button className="cartItemsEmptyButton">
                Volver a la tienda
             </button>
            </Link> }
            </div>
            }
        {
        cart.length>=1
        ?   <form className="cartFormWrapper" onSubmit={(e)=>handleSubmit(e)}>
            <span id="cartFormTitle">Finaliza tu compra</span>
        <label htmlFor="cartFormName">Nombre completo</label>
            <input id="cartFormName" onChange={(e)=>handleChange(e)} name="name" type="text" />
            <label htmlFor="cartFormMail">Correo electrónico</label>
            <input id="cartFormMail" onChange={(e)=>handleChange(e)}  name="mail" type="email" />
            <label htmlFor="cartFormTel">Número telefónico</label>
            <input id="cartFormTel" onChange={(e)=>handleChange(e)} name="phone" type="tel" /> 
        <button className="clearButton" onClick={clearItems}>Vaciar el carrito</button>
        <input id="cartFormSubmit" type="submit" value="Realizar el pedido!" onSubmit={(e)=>handleSubmit(e)}  />
            <span className="cartFormTotalPrice">Precio total: {cartPrice}</span>
            </form>
        :null
        }
        </>
    )
}
export default Cart