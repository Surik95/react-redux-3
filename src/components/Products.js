import React from "react";
import propTypes from "prop-types";

export default function Products({ product }) {
  let newPrice;
  if (product.onSale) {
    newPrice =
      Math.round((product.price - (product.price * product.sale) / 100) * 100) /
      100;
  }
  let nameProduct = product.nameProduct;
  if (nameProduct.length > 60) {
    nameProduct = nameProduct.slice(0, 60) + "...";
  }
  debugger;
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.srcImage} alt={product.nameProduct} />
      </div>
      <div className="price-block">
        {product.onSale && <p className="price">{newPrice} ₽</p>}
        <p className={product.onSale ? "old-price" : "price"}>
          {product.price} ₽
        </p>
        {product.onSale && <p className="sale">-{product.sale}%</p>}
      </div>
      <div className="name-card">{nameProduct}</div>
      <button className="btn-product">В корзину</button>
    </div>
  );
}
