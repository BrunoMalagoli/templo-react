import React, { useEffect, useState } from "react";
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";
import Products from "../Products"
import { useParams } from "react-router";
 const ItemListContainer=({items})=>{
    const [productos,setProductos]= useState([]);
    const {categoryId} = useParams();
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
        .then((res)=>{
            categoryId
        ?setProductos(res.filter((item)=>item.category===categoryId))
        :setProductos(Products)
        })    
        .catch((err)=>console.log(err))
    },[categoryId]);
     return(
        <>
        <div className='itemListContainer'>
        <ItemList productos={productos}/>
        </div>
        </>
     )
 }
 export default ItemListContainer