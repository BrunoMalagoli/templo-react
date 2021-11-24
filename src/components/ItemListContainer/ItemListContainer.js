import React, { useEffect, useState } from "react";
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, where, query } from "firebase/firestore";
import { getFirestore } from "../../firebase";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";

 const ItemListContainer=({items})=>{
    const [productos,setProductos]= useState(null);
    const { categoryId } = useParams();
    useEffect(()=>{
        const db = getFirestore();
        getDocs(collection(db, "items")).then((snapshot)=>{
            setProductos(snapshot.docs.map((doc)=>doc.data()));
        })
    },[categoryId]);
     return(
        <>
        {productos?
        <div className='itemListContainer'>
        <ItemList productos={productos} key={productos.id}/>
        </div>
        :<Loader/>
        }
        </>
     )
 }
 export default ItemListContainer