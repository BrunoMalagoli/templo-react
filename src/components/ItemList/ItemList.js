import React, { useEffect, useState } from "react";
import '../ItemList/ItemList.scss'
import Item from "../ItemList/Item/Item";
import Products from "../Products.json"
import ItemCount from "./Item/ItemCount/ItemCount";
const ItemList = ({items}) =>{
    const [productos,setProductos]= useState([]);
    
    const getProducts=(data)=>
        new Promise((resolve,reject)=>{
           setTimeout(()=>{
            if(data){
                resolve(data);
            }else{
                reject("No se pudieron encontrar los productos");
            }
           }, 2000)
        })
    useEffect(()=>{
        getProducts(Products)
        .then((res)=>setProductos(res))
        .catch((err)=>console.log(err))
    });
    return(
        <>
        <div id='itemList'>
            {productos ? productos.map(items=><Item  items={items} key={items.id}><ItemCount  stock={productos.stock} initial='1' /></Item>) : "Loading..."}
        </div>
        </>
    )
}
export default ItemList;