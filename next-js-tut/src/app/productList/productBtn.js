"use client";
import React from "react";

const ProductBtn = ({ price }) => {
  return (
    <button onClick={() => alert(`button clicked and price is ${price}`)}>
      productBtn
    </button>
  );
};

export default ProductBtn;
