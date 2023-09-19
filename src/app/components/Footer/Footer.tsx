import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="max-container pt-[5rem] pb-[5rem] font-montserrat  text-lg mt-6  leading-8 ">
      <div className="">
        <h1>ImageGala</h1>
        <p>Something something</p>
        <h3>Socials</h3>
        <div></div>
      </div>
      <div className="flex items-center justify-center mt-10 ">
        @ Copyright 2023 Brian_miruri12 ImageGala
      </div>
    </section>
  );
};

export default Footer;
