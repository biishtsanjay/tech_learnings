"use client";
import React, { useState } from "react";
import "./../style.css";
const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const handleClick = async () => {
    console.log(name, category);
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, category, company }),
    });
    result = await result.json();
    if (result.success) {
      alert("new product added");
    }
  };

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      Add Products
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
        <button className="btn_category" onClick={handleClick}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
