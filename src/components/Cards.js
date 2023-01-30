import React from "react";
import { useSelector } from "react-redux";
import Product from "./Products";

export default function Cards() {
  const products = useSelector((state) => state.productList);
  debugger;
  return (
    <div className="cardProduct">
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}
