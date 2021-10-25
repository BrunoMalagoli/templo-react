import React from "react";
import '../ItemList/ItemList.scss'
import Item from "../ItemList/Item/Item";
const ItemList = ({productos}) =>{
    return (
        <>
            <div id='itemList'>
                {productos ? productos.map(items => <Item items={items} key={items.id}/>) : "Loading..."}
            </div>
        </>
    );
}
export default ItemList;