import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "../../firebase/index";
import Loader from "../Loader/Loader";
const ItemDetailContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const itemsRef = doc(db, "items", itemId);
    getDoc(itemsRef).then((snapshot) => {
      console.log(snapshot);
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [itemId]);

  return (
    <>
      {item ? (
        <ItemDetail items={item} key={item.id} />
      ) : (
        <div className="loaderContainer">
          <Loader />
        </div>
      )}
    </>
  );
};
export default ItemDetailContainer;
