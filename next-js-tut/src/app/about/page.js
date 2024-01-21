"use client";

import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <>About Page</>
      <button onClick={() => router.push("/")}>go to home</button>
    </div>
  );
};

export default About;
