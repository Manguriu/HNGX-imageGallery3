/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="max-container mt-5">
      <nav className=" flex justify-between items-center w-full">
        <a href="/">
          <h1 className="text-4xl font-semibold text-cyan-600 max-xl:hidden">
            |ImageGala|
          </h1>
        </a>
        <ul className="flex justify-center items-center lg:gap-5 ">
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/"> Home</a>
          </li>
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/"> Popolar</a>
          </li>
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/pages/login"> Login</a>
          </li>
          <li className="max-sm:text-[10px] font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/pages/logout"> Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
