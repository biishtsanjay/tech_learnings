"use client";
import React, { useState, useEffect } from "react";
import "./../../../../style.css";

export default function Update({ params }) {
  let id = params.personId;
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const updatePerson = async () => {
    let result = await fetch("http://localhost:3000/api/people/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    console.log("put res", result);
    if (result.success) {
      alert("success");
    } else {
      alert("wrong info");
    }
  };

  // to fill default data on landing on the page
  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/api/people/" + id);
    data = await data.json();
    console.log("DT", data);
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="add-user">
      Update page
      <input
        type="text"
        placeholder="Enter Name"
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age"
        className="input-field"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn" onClick={updatePerson}>
        Update Person
      </button>
    </div>
  );
}
