import { useState } from "react";

export default function FilterButton({ ...props }) {
  return (
    <>
      <button
        className={
          props.filter === props.filterWord
            ? "btn btn-info"
            : "btn btn-outline btn-info"
        }
        onClick={() => {
          props.setFilter(props.filterWord);
          props.filterList(props.filterWord);
        }}
      >
        {props.filterWord}
      </button>
    </>
  );
}
