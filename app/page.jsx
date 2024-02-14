import Image from "next/image";
import Table from "../app/components/Table";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

async function getData() {
  const res = await fetch("https://lasotras-723a.restdb.io/rest/recursero", {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "65607cfa91e493a72fbe7b1a",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <NavBar />
      <Hero />
      <main className="p-5 md:py-24 md:px-32" id="recursero">
        <Table data={data} />
      </main>
      <Footer />
    </>
  );
}
