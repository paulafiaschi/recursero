"use client";

import { useState } from "react";
import Ficha from "./Ficha";
import FilterButton from "./FilterButton";

export default function Main(props) {
  const [filter, setFilter] = useState("Todas");
  const [filteredList, setFilteredList] = useState(props.data);

  function filterList(f) {
    setFilter(f);
    setFilteredList(props.data.filter((ficha) => ficha.Categoría === f));
  }

  const categories = ["Todas"];

  props.data.map((ficha) => {
    categories.includes(ficha.Categoría)
      ? null
      : categories.push(ficha.Categoría);
  });

  return (
    <>
      <h2 className="text-4xl pl-3 font-bold mb-2">Categorías</h2>
      <div className="filters menu lg:menu-horizontal gap-3 mb-8">
        {categories.map((c, i) => {
          return (
            <FilterButton
              filterWord={c}
              setFilter={setFilter}
              filter={filter}
              filterList={filterList}
              key={i}
            />
          );
        })}
      </div>

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
