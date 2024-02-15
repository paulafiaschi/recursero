import { useState } from "react";

export default function SubfilterButton({ ...props }) {
  console.log(props);
  return (
    <>
      <button
        className={
          props.subcategory === props.filterWord
            ? "btn btn-info"
            : "btn btn-outline btn-info"
        }
        onClick={() => {
          props.setSubcategory(props.filterWord);
          props.filterList(props.filter);
        }}
      >
        {props.filterWord}
      </button>
    </>
  );
}
