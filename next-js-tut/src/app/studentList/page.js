import Link from "next/link";
import React from "react";

const StudentList = () => {
  const studentData = [
    { name: "abc", id: 1 },
    { name: "def", id: 2 },
    { name: "GHI", id: 3 },
    { name: "raamu", id: 4 },
    { name: "shyaamu", id: 5 },
  ];
  return (
    <>
      <div>Student List</div>
      {studentData.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/studentList/${item?.id}`}>{item?.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default StudentList;
