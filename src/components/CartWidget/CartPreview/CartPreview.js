import React from "react";
import { Link } from "react-router-dom";
const CartPreview=({ items })=> {
  return items.map((item) => (
    <div key={item.id} className="cartItemsWrapper">
      <h3>{item.name}</h3>
      <span>Cantidad:{item.addedItems}</span>
      <p>
        Precio (x{item.addedItems} unidades): ${item.price * item.addedItems}
      </p>
      <Link to={`/cart`}><button>Ir al carrito de compras🚀</button></Link>
    </div>
  ));
}
export default CartPreview;