// Copyright.jsx
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="copyright">
      © {new Date().getFullYear()} All Rights Reserved.{" "}
      <Link
        to="/update"
        className="transition-all text-[var(--black)] duration-200 ease-in font-extrabold pl-1 hover:text-blue-500"
      >
        V<span className="text-[10px]  font-bold ">1.2.2</span>
      </Link>
    </div>
  );
};

export default Copyright;
