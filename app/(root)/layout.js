import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="w-full h-32 text-white bg-[#062708] flex justify-between items-center ">
        <span className="text-2xl font-bold pb-14 pl-4 text-[#449C95]">
          Eventa
        </span>
        <ul className="flex gap-28 text-lg ">
          <li>
            <Link href="#hero-section">Home</Link>
          </li>
          <li>
            <Link href="">Events</Link>
          </li>
          <li>
            <Link href="#footer">Contact</Link>
          </li>
        </ul>
        <Link href="" className="flex justify-center items-center text-lg w-28 h-8 bg-[#449C95] rounded-md mr-5">
          Login
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
