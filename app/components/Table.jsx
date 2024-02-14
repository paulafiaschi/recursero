"use client";

import { useState } from "react";
import Ficha from "./Ficha";
import FilterButton from "./FilterButton";

export default function Main(props) {
  const [filter, setFilter] = useState("Todas");
  const [filteredList, setFilteredList] = useState(props.data);

  function filterList(f) {
    setFilter(f);
    setFilteredList(props.data.filter((ficha) => ficha.Categoria === f));
  }

  return (
    <>
      <h2 className="text-4xl pl-3 font-bold mb-2">Recursero</h2>
      <div className="filters menu lg:menu-horizontal gap-3 mb-2">
        <FilterButton
          filterWord="Todas"
          setFilter={setFilter}
          filter={filter}
        />
        <FilterButton
          filterWord="Emergencias"
          setFilter={setFilter}
          filter={filter}
        />
        <FilterButton
          filterWord="Cuidado de cuerpa y mente"
          setFilter={setFilter}
          filter={filter}
        />
      </div>
      {filter != "Todas" ? (
        <h3 className="category pl-3 mb-8"> {filter}</h3>
      ) : (
        <h3 className="mb-8">&nbsp;</h3>
      )}
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
