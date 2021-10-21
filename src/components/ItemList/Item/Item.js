import React from "react";
import '../Item/Item.scss';
const Item = ({items}) =>{
    return(
    <>
    <div className='itemContainer'>
        <div className='itemCard'>
        <img className='itemImg' src={items.photo} alt="Bottle of alcohol" />
        <h3 className='itemName'>{items.name}</h3>
        <p className='itemPrice'>${items.price}</p>
        </div>
    </div>
    </>
    )
}
export default Item;