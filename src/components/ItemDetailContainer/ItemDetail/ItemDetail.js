import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemList/Item/ItemCount/ItemCount";
import Loader from "../../Loader/Loader";
import "../ItemDetail/ItemDetail.scss";
const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState();
  const [showCounter, setShowCounter] = useState(true);
  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    setShowCounter(!showCounter);
    console.log(showCounter);
    console.log(quantity);
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
              {showCounter ? (
                <ItemCount
                  stock={items.stock}
                  initial={"0"}
                  onCart={(items) => onAdd(items)}
                  setItemsOnCart={() => setQuantity}
                  showCounter={showCounter}
                />
              ) : (
                <Link to={`/cart`}>
                  <>
                    <button>Ver carrito ({quantity} items agregados)</button>
                  </>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="loaderContainer">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};
export default ItemDetail;
