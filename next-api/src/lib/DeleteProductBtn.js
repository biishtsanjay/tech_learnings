"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteProductBtn = (props) => {
  const router = useRouter();
  const handleDelete = async () => {
    let response = await fetch(
      "http://localhost:3000/api/products/" + props.id,
      {
        method: "DELETE",
      }
    );
    response = await response.json();
    if (response.success) {
      alert("Product deleted.");
      router.push("/products");
    } else {
      alert("Error deleting product.");
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteProductBtn;
