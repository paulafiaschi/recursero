"use client";

import { useState, useEffect } from "react";
import Ficha from "./Ficha";
import FilterButton from "./FilterButton";
import SubfilterButton from "./SubfilterButton";
import { create } from "domain";

export default function Main(props) {
  const [filter, setFilter] = useState("Todas");
  const [filteredList, setFilteredList] = useState(props.data);
  const [subcategories, setSubcategories] = useState([new Set()]);
  const [subcategory, setSubcategory] = useState("");
  const [subfilteredList, setSubfilteredList] = useState([]);

  useEffect(() => {
    setSubcategories([]);
    const newSubcategories = new Set(
      filteredList.map((item) => item.Subcategoría)
    );
    setSubcategories(Array.from(newSubcategories));
  }, [filter, props.data, filteredList]);

  function filterList(f) {
    setFilter(f);
    setFilteredList(props.data.filter((ficha) => ficha.Categoría === f));
    setSubfilteredList([]);
    setSubcategory("");
  }

  function subfilterList(s) {
    s === "Limpiar" ? setSubcategory("") : setSubcategory(s);

    setSubfilteredList(
      filteredList.filter((ficha) => ficha.Subcategoría === s)
    );
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
      <div className="filters menu lg:menu-horizontal gap-3 mb-2">
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
      <div className="filters menu lg:menu-horizontal gap-3 mb-8">
        {filter != "Todas"
          ? subcategories.map((s, i) => {
              return (
                <SubfilterButton
                  filterWord={s}
                  subfilterList={subfilterList}
                  filter={filter}
                  filterList={filterList}
                  key={i}
                  subcategory={subcategory}
                />
              );
            })
          : null}
        {filter != "Todas" && subcategory != "" ? (
          <SubfilterButton
            filterWord={"Limpiar"}
            subfilterList={subfilterList}
            filter={filter}
            filterList={filterList}
            key={999}
            subcategory={subcategory}
          />
        ) : null}
      </div>

      <div className="overflow-x-auto">
        <table className="table p-12 m-auto">
          <tbody>
            {filter === "Todas"
              ? props.data.map((ficha) => {
                  return <Ficha props={ficha} key={ficha._id} />;
                })
              : subfilteredList.length != 0
              ? subfilteredList.map((ficha) => {
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
