import { useState } from "react";

export default function SubfilterButton({ ...props }) {
  return (
    <>
      {props.filterWord === "Limpiar" ? (
        <button
          className={
            props.subcategory === props.filterWord
              ? "btn btn-ghost btn-sm  bg-pink-300 hover:bg-pink-400"
              : "btn btn-ghost btn-sm underline underline-offset-2 hover:bg-pink-100 active:bg-pink-400 border-0"
          }
          onClick={() => {
            props.filterList(props.filter);
            props.subfilterList(props.filterWord);
          }}
        >
          x
        </button>
      ) : (
        <button
          className={
            props.subcategory === props.filterWord
              ? "btn btn-ghost btn-sm  bg-pink-300 hover:bg-pink-400"
              : "btn btn-ghost btn-sm underline underline-offset-2 hover:bg-pink-100 active:bg-pink-400 border-0"
          }
          onClick={() => {
            props.filterList(props.filter);
            props.subfilterList(props.filterWord);
          }}
        >
          {props.filterWord}
        </button>
      )}
    </>
  );
}
