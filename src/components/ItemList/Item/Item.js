import React from "react";
import '../Item/Item.scss';
import ItemCount from "./ItemCount/ItemCount"
const Item = ({items}) =>{
    return(
    <>
    <div className='itemContainer'>
        <div className='itemCard'>
        <img className='itemImg' src={items.photo} alt="Bottle of alcohol" />
        <h3 className='itemName'>{items.name}</h3>
        <p className='itemPrice'>${items.price}</p>
        <ItemCount stock={items.stock} initial='1' />
        </div>
    </div>
    </>
    )
}
export default Item;