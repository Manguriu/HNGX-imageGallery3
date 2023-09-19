import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const SearchC = (props: Props) => {
  return (
    <section>
      <div className=" w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-cyan-300 rounded-full">
        <input
          type="text"
          placeholder="Search Image.."
          className="input outline-none"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <AiOutlineSearch />
        </div>
      </div>
    </section>
  );
};

export default SearchC;
