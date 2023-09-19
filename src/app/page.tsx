"use client";
import HomeImage from "./components/homeC/HomeImage";
import HeroContext from "./components/hero/HeroContext";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <section className="pb-10 mb-[9rem] ">
        <HeroContext />
      </section>
      <section className="mb-[10rem]">
        <HomeImage />
      </section>
      <section className="bg-slate-200 w-full">
        <Footer />
      </section>
    </main>
  );
}
