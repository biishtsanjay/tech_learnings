"use client";
import React from "react";

const StudentDetail = ({ params }) => {
  return (
    <>
      <div>Student Detail</div>
      <h2>Id: {params.student}</h2>
    </>
  );
};

export default StudentDetail;
