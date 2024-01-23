"use client";
import React, { useEffect, useState } from "react";
import "./../../style.css";
import Link from "next/link";
const AddProducts = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const updateProduct = async () => {
    const product_id = props.params.editproduct;
    let data = await fetch("http://localhost:3000/api/products/" + product_id, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, category, company }),
    });
    data = await data.json();
    if (data.result) {
      alert("new product updated");
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    const product_id = props.params.editproduct;
    let productData = await fetch(
      "http://localhost:3000/api/products/" + product_id
    );
    productData = await productData.json();
    if (productData.success) {
      const result = productData.result;
      setName(result.name);
      setCategory(result.category);
      setPrice(result.price);
      setColor(result.color);
      setCompany(result.company);
    }
  };

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      Update Product
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter product name"
          className="input"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="enter product price"
          className="input"
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="enter product color"
          className="input"
        />
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          placeholder="enter product company"
          className="input"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="enter product category"
          className="input"
        />
        <button className="btn_category" onClick={updateProduct}>
          Update Product
        </button>
        <Link href="/products">Go Back</Link>
      </div>
    </div>
  );
};

export default AddProducts;
