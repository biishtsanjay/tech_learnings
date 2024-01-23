import Link from "next/link";
import React from "react";
async function getDetailPerson(id) {
  let data = await fetch(`http://localhost:3000/api/people/${id}`);
  data = await data.json();
  return data.result;
}

export default async function DetailPeople({ params }) {
  const detailData = await getDetailPerson(params.personId);
  return (
    <>
      <div>Detail People</div>
      <p>name:{detailData?.name}</p>
      <p>age:{detailData.age}</p>
      <p>email:{detailData.email}</p>
    </>
  );
}
