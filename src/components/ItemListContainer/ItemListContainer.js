import React from "react";
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";
 const ItemListContainer=()=>{
     return(
        <>
        <div className='itemListContainer'>
        <ItemList/>
        </div>
        </>
     )
 }
 export default ItemListContainer