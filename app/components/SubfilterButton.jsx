import { useState } from "react";

export default function SubfilterButton({ ...props }) {
  return (
    <>
      <button
        className={
          props.subcategory === props.filterWord
            ? "btn btn-info"
            : "btn btn-outline btn-info"
        }
        onClick={() => {
          props.filterList(props.filter);
          props.subfilterList(props.filterWord);
        }}
      >
        {props.filterWord}
      </button>
    </>
  );
}
