import Image from "next/image";
import Table from "../app/components/Table";

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
      <h1>Recursero</h1>

      <main>
        {/* <label>Con qué te podemos ayudar?</label>
      <input type="search"></input> */}
        <Table data={data} />
      </main>
    </>
  );
}
