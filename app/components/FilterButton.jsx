import { useState } from "react";

export default function FilterButton({ ...props }) {
  return (
    <>
      <button
        className={
          props.filter === props.filterWord
            ? "btn btn-info"
            : "btn btn-outline btn-info md:btn-ghost md:underline"
        }
        onClick={() => {
          props.setFilter(props.filterWord);
        }}
      >
        {props.filterWord}
      </button>
    </>
  );
}
