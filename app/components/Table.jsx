"use client";

import { useState } from "react";
import Ficha from "./Ficha";

export default function Main(props) {
  const [filter, setFilter] = useState("Todas");
  const [filteredList, setFilteredList] = useState(props.data);

  function filterList(f) {
    setFilter(f);
    setFilteredList(props.data.filter((ficha) => ficha.Categoria === f));
  }

  return (
    <>
      {filter != "Todas" ? (
        <h2 className={styles.category}> {filter}</h2>
      ) : null}
      <h2 className="text-4xl pl-3 font-bold mb-8">Recursero</h2>

      <div className="overflow-x-auto">
        <table className="table p-12 m-auto">
          <tbody>
            {filter === "Todas"
              ? props.data.map((ficha) => {
                  return <Ficha props={ficha} key={ficha._id} />;
                })
              : filteredList.map((ficha) => {
                  return <Ficha props={ficha} key={ficha._id} />;
                })}
          </tbody>
        </table>
      </div>
    </>
  );
}
