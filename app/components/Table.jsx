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
      <h2>Table</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}

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
