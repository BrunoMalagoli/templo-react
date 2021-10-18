import React from "react";
import './styles/ItemListContainer.scss'
import ItemCount from "./ItemCount";
 const ItemListContainer=()=>{
     return(
        <>
        <ItemCount  stock='5' initial='1' />
        </>
     )
 }
 export default ItemListContainer