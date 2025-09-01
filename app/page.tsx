import Image from "next/image";
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import CompanyName from "./components/companyname";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <CompanyName />
      <Hero />
    </>
  );
}
