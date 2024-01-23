"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [file, setFile] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", file);
    let result = await fetch("api/upload", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    if (result.success) {
      alert("file uploaded successfully");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/products">Products</Link>
      <br></br>
      <Link href="/addProduct">Add Product</Link>
      <form type="submit" onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </main>
  );
}
