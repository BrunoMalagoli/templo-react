import React from "react";
import "../ItemDetail/ItemDetail.scss";
const ItemDetail = ({ items }) => {
  return (
    <>
      <div id="itemDetailContainer">
        <img src={items.photo} alt="Imagen del producto" />
        <h2>{items.name}</h2>
        <h4>{items.price}</h4>
        <p>{items.description}</p>
      </div>
    </>
  );
};
export default ItemDetail;
