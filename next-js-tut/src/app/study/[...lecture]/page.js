"use client";
import React from "react";
const LecturePage = ({ params }) => {
  return (
    <>
      <div>Lecture Page is this</div>
      <h3>Day of college: {params.lecture[0]}</h3>
      <h3>Lecture number: {params.lecture[1]}</h3>
    </>
  );
};

export default LecturePage;
