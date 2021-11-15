import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemList/Item/ItemCount/ItemCount";
import Loader from "../../Loader/Loader";
import "../ItemDetail/ItemDetail.scss";
import Swal from "sweetalert2";
import { useCart } from "../../../contexts/CartContext";
const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState();
  const [showCounter, setShowCounter] = useState(true);
  const { addItem } = useCart();
  const onAdd = (quantityToAdd) => {
    addItem(items, quantityToAdd);
    setQuantity(quantityToAdd);
    setShowCounter(!showCounter);
  };
  let showAlert = (quantity) => {
    if (quantity >= 1) {
      Swal.fire({
        title: `Agregaste ${quantity} items a tu carrito!`,
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        position: "bottom-end",
        background: "rgb(255, 221, 84)",
        icon: "success",
      });
    } else {
      Swal.fire({
        text: "Agrega productos a tu carrito!",
        icon: "error",
      });
    }
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
                (showAlert(quantity),
                console.log(showCounter),
                console.log(quantity),
                (
                  <Link to={`/cart`}>
                    <>
                      <button className="toCartButton">
                        Ver carrito ({quantity} items agregados)
                      </button>
                    </>
                  </Link>
                ))
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
