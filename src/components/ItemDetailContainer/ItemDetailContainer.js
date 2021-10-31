import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail/ItemDetail";
import Products from "../Products";

const ItemDetailContainer = ({ items }) => {
  // eslint-disable-next-line no-unused-vars
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const getItem = (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("No se encontró el Producto deseado");
        }
      }, 1500);
    });
  useEffect(() => {
    getItem(Products)
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <ItemDetail items={item} key={item.id} />
    </>
  );
};
export default ItemDetailContainer;
