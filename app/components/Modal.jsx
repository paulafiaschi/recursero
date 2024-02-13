import { useState } from "react";
export default function Modal({ setDisplayedInfo, displayedInfo }) {
  console.log(displayedInfo);

  return (
    <>
      <div
        className={`overlay ${displayedInfo.length == 0 ? "hide" : "show"}`}
        onClick={() => setDisplayedInfo([])}
      >
        <div className="my-modal">
          <button className="x" onClick={() => setDisplayedInfo([])}>
            X
          </button>
          <p>Modal</p>
          <h1>{displayedInfo.Nombre}</h1>
        </div>
      </div>
    </>
  );
}
