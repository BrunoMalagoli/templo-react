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
      .then((res) => {
        itemId
          ? setItem(res.filter((item) => item.id === parseInt(itemId)))
          : setItem(Products);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <>
      <ItemDetail items={item[0]} key={item.id} />
    </>
  );
};
export default ItemDetailContainer;
