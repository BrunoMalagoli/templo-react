import React from "react";
import '../ItemList/ItemList.scss'
import Item from "../ItemList/Item/Item";
import Loader from "../Loader/Loader";
const ItemList = ({productos}) =>{
    return (
        <>
            <div id='itemList' key={productos.id}>
                {productos ? productos.map(items => <Item items={items} key={items.id}/>) : <Loader/>}
            </div>
        </>
    );
}
export default ItemList;