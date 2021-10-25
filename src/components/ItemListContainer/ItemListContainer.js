import React, { useEffect, useState } from "react";
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";
import Products from "../Products"
 const ItemListContainer=({items})=>{
    const [productos,setProductos]= useState([]);
    
    const getProducts=(productos)=>
        new Promise((resolve,reject)=>{
           setTimeout(()=>{
            if(productos){
                resolve(productos);
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
        <div className='itemListContainer'>
        <ItemList productos={productos}/>
        </div>
        </>
     )
 }
 export default ItemListContainer