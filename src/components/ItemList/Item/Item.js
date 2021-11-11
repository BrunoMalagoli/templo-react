import React from "react";
import '../Item/Item.scss';
import ItemCount from "./ItemCount/ItemCount"
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
const Item = ({items}) =>{
    const onAdd=(quantity)=>{
        if (quantity >= 1) {
            Swal.fire({
              title: `Agregaste ${quantity} items a tu carrito!`,
              toast: true,
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 1500,
              position: "bottom-end",
              background: "rgb(255, 221, 84)",
              icon: "success",
            });
          } else {
            Swal.fire({
              text: "Agrega productos a tu carrito!",
              icon: "error",
            });
          }
    }
    return(
    <>
    <div className='itemContainer'>
        <div className='itemCard'>
        <img className='itemImg' src={items.photo} alt="Bottle of alcohol" />
        <h3 className='itemName'>{items.name}</h3>
        <p className='itemPrice'>${items.price}</p>
        <ItemCount stock={items.stock} initial='0' onCart= {(items)=>onAdd(items)} />
        <NavLink to={`/item/${items.id}`} className="itemDescriptionAnchor"><span className="itemDescription">Detalle del producto</span></NavLink>
        </div>
    </div>
    </>
    )
}
export default Item;