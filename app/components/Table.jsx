"use client";

import { useState, useEffect, useRef } from "react";
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

  const [isSearching, setIsSearching] = useState(false);
  const [searchedResults, setSearchedResults] = useState([]);
  const searchGroup = useRef();

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

  function searchInfo(e) {
    const input = e.target.value.toLowerCase();
    const searchedResults = props.data.filter((item) => {
      return (
        item.Nombre.toLowerCase().includes(input) ||
        item.Categoría.toLowerCase().includes(input)
      );
    });
    console.log("searched", searchedResults);
    // searchedProducts.length === 0 ? setNoProductsFound(true) : setNoProductsFound(false);

    input === "" ? setSearchedResults([]) : setSearchedResults(searchedResults);
    // console.log(input);
  }

  return (
    <>
      {/* Search starts */}
      <div className="search">
        <label className="input input-bordered flex items-center gap-2 w-96">
          <input
            type="text"
            className="grow"
            placeholder="Buscar..."
            id="searchBar"
            ref={searchGroup}
            onChange={searchInfo}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* Search ends */}

      <h2 className="text-4xl pl-3 font-bold mb-2">Categorías</h2>
      <div className="filters menu lg:menu-horizontal gap-3 mb-2 w-full">
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
