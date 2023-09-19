/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="max-container">
      <nav className=" flex justify-between items-center w-full">
        <a href="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0034/8759/6579/files/Black_large_logo.png?height=628&pad_color=fff&v=1614328540&width=1200"
            alt=""
            width={130}
            height={10}
          />
        </a>
        <ul className="flex justify-center items-center gap-16">
          <li className="font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/"> Home</a>
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/"> Popolar</a>
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/"> Login</a>
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray hover:bg-cyan-500 px-6 py-2 rounded-lg">
            <a href="/"> Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
