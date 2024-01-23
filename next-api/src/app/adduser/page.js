"use client";
import React, { useState } from "react";
import "./../style.css";
export default function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert("new user added");
    } else {
      alert("some error with data please check and try again");
    }
  };
  return (
    <div className="add-user">
      Add new User
      <input
        type="text"
        placeholder="Enter Name"
        className="input-field"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age"
        className="input-field"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        className="input-field"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn" onClick={addUser}>
        Add User
      </button>
    </div>
  );
}
