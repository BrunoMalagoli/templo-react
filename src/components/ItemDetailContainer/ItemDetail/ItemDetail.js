import React, { useState } from "react";
import ItemCount from "../../ItemList/Item/ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.scss";
const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState();
  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
  };
  return (
    <>
      <div id="itemDetailContainer">
        {items ? (
          <div className="itemDetailCard">
            <img
              src={items.photo}
              alt="Imagen del producto"
              id="itemDetailImg"
            />
            <h2 className="itemDetailName">{items.name}</h2>
            <h4 className="itemDetailPrice">{items.price}</h4>
            <p className="itemDetailDescription">{items.description}</p>
            <div className="itemDetailCounterWrapper">
              <ItemCount
                stock={items.stock}
                initial={"0"}
                quantityToAdd={onAdd}
                quantity={quantity}
              />
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};
export default ItemDetail;
