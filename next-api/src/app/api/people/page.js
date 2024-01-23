import Link from "next/link";
import React from "react";
async function getPeople() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}
export default async function People() {
  const list = await getPeople();
  return (
    <>
      <h2>PEOPLE LIST</h2>
      {list?.map((obj, index) => {
        return (
          <div>
            <Link href={`/api/people/${obj.id}/update`} key={index}>
              {obj.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}
