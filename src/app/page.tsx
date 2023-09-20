"use client";
import HomeImage from "./components/homeC/HomeImage";
import HeroContext from "./components/hero/HeroContext";
import Footer from "./components/Footer/Footer";
import OtherImages from "./components/otherImages/OtherImages";
import MiainC from "./components/corasel/MiainC";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [images, setImages] = useState<ImageData[]>([]); // Specify the type here
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=39541711-c70499494dc9fefad4dcafbe1&q=${term}&image_type=photo&pretty=true`
        );
        setImages(response.data.hits);
        setLoading(false);
        console.log("data", response.data.hits);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [term]);
  return (
    <main className="">
      <section className="pb-10 mb-[9rem]">
        <HeroContext />
      </section>
      <section className="mb-[7rem]">
        <HomeImage />
      </section>
      <section className="mb-[5rem]">
        <MiainC />
      </section>
      <section className="mb-[10rem]">
        <OtherImages
          images={images}
          loading={loading}
          term={(text: React.SetStateAction<string>) => setTerm(text)}
        />
      </section>
      <section className="bg-slate-200 w-full">
        <Footer />
      </section>
    </main>
  );
}
