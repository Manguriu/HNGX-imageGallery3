/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

type Props = {};

function Card({
  imgURL,
  bigImage,
  changeImage,
}: {
  heroImg: any;
  imgURL: any;
  bigImage: any;
  changeImage: any;
}) {
  const handleClick = () => {
    if (bigImage !== imgURL.heroImg) {
      changeImage(imgURL.heroImg);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigImage === imgURL.heroImg ? " border-cyan-300" : "border-transparent"
      } coursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex sm:w-40 sm:h-40 rounded-xl max-sm:p-4 hover:cursor-pointer"
        style={{
          backgroundImage: `url(${imgURL.heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default Card;
