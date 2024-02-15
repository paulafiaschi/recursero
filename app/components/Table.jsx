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

  const [isSearching, setIsSearching] = useState(0);
  const [searchedResults, setSearchedResults] = useState([]);
  const searchGroup = useRef();
  let cleanData = props.data;

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

  var accent_map = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "a",
    É: "e",
    Í: "i",
    Ó: "o",
    Ú: "u",
  };
  function accent_fold(s) {
    if (!s) {
      return "";
    }
    var ret = "";
    for (var i = 0; i < s.length; i++) {
      ret += accent_map[s.charAt(i)] || s.charAt(i);
    }
    return ret;
  }

  function searchInfo(e) {
    const input = e.target.value.toLowerCase();

    let searchedResults = props.data.filter((item) => {
      return (
        accent_fold(item.Nombre).toLowerCase().includes(input) ||
        accent_fold(item.Categoría).toLowerCase().includes(input)
      );
    });

    input === ""
      ? (searchedResults = [] && setIsSearching(0))
      : setSearchedResults(searchedResults);

    searchedResults === undefined
      ? setIsSearching(0)
      : searchedResults != undefined && searchedResults.length == 0
      ? setIsSearching(2)
      : setIsSearching(1);
  }

  cleanData =
    isSearching === 1
      ? searchedResults
      : subfilteredList.length !== 0
      ? subfilteredList
      : filter === "Todas"
      ? props.data
      : filteredList;
  return (
    <>
      <div className="search absolute right-32">
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

      {isSearching === 0 ? (
        <h2 className="text-4xl pl-3 font-bold mb-8"> Categorías</h2>
      ) : isSearching === 1 ? (
        <h2 className="text-4xl pl-3 font-bold mb-8">Resultados</h2>
      ) : isSearching === 2 ? (
        <>
          <h2 className="text-4xl pl-3 font-bold mb-4">
            Ningún resultado :&#40;
          </h2>
          <h3 className="text-2xl pl-3 mb-8">
            Probá buscando un término diferente o explorá &darr;
          </h3>
        </>
      ) : null}

      {isSearching === 0 && (
        <>
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
        </>
      )}
      <div className="overflow-x-auto">
        <table className="table p-12 m-auto">
          <tbody>
            {cleanData.map((ficha) => {
              return <Ficha props={ficha} key={ficha._id} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
