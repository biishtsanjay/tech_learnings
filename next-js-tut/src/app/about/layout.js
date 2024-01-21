"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/about/aboutCollege" ? (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-around",
          }}
        >
          <Link href="/about">About</Link>
          <Link href="/about/aboutStudent">to about student</Link>
          <Link href="/about/aboutCollege">to about college</Link>
        </div>
      ) : null}
      {children}
    </>
  );
};

export default layout;
