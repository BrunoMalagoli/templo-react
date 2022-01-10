import React, { useEffect, useState } from "react";
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, where, query } from "firebase/firestore";
import { getFirestore } from "../../firebase";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import { yellow } from "@mui/material/colors";

 const ItemListContainer=({items})=>{
    const [productos,setProductos]= useState(null);
    const { categoryId } = useParams();
    useEffect(()=>{
        const db = getFirestore();
        const q = query(collection(db,"items"),where("category", "==", categoryId || "/"));
        if (categoryId) {
         getDocs(q).then((snapshot)=>{
            setProductos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })    
        }else{
            getDocs(collection(db, "items")).then((snapshot)=>{
                setProductos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            })
        }
    },[categoryId]);
     return(
        <>
        {productos?
        <div className='itemListContainer'>
        <ItemList productos={productos} key={productos.id}/>
        </div>
        :<Loader 
        size={20}
        sx={{
            position:"absolute",
            color: yellow[500],
            top:"50%",
            left:"50%",
        }}
        />
        }
        {
        productos?
        <Footer />
        :null
        }
        </>
     )
 }
 export default ItemListContainer