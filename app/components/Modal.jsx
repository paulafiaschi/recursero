import { useState } from "react";
import Image from "next/image";
import Row from "./Row";

export default function Modal({ setDisplayedInfo, displayedInfo }) {
  return (
    <>
      <div
        className={`overlay backdrop-blur-sm ${
          displayedInfo.length == 0 ? "hide" : "show"
        }`}
      >
        <div className="my-modal flex flex-col align-center justify-between gap-9 bg-amber-50 px-28 py-16 rounded-2xl">
          <button className="x" onClick={() => setDisplayedInfo([])}>
            <Image
              src="/cross.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </button>
          <p className="text-center text-neutral-400">
            {displayedInfo.Categoría} | {displayedInfo.Subcategoría}
          </p>
          <div className="description ">
            <h2 className="text-4xl font-bold text-center my-3">
              {displayedInfo.Nombre}
            </h2>
            <p className="text-center text-lg max-w-[70ch] block m-auto">
              {displayedInfo.Descripción}
            </p>
          </div>
          <div className="contact my-5 pb-5 bg-amber-100">
            <h4 className="p-4 mb-4 bg-amber-200">CONTACTO</h4>

            <Row row="Teléfono" displayedInfo={displayedInfo.Teléfono}></Row>
            <Row row="Email" displayedInfo={displayedInfo.Email}></Row>
            <Row row="Idiomas" displayedInfo={displayedInfo.Idioma}></Row>
            <Row row="Precio" displayedInfo={displayedInfo.Precio}></Row>
            <Row row="Web" displayedInfo={displayedInfo.Web}></Row>
            <Row row="Dirección" displayedInfo={displayedInfo.Dirección}></Row>
          </div>
        </div>
      </div>
    </>
  );
}
