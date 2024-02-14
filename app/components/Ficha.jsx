import { useState } from "react";
import Image from "next/image";

import Modal from "./Modal";
export default function Ficha({ props }) {
  //   cleanDescription();
  //   let descrArray;
  //   function cleanDescription() {
  //     let descrArray = props.Descripcion.split("; ");
  //     //   console.log(descrArray);
  //   }
  //   console.log(props);

  const [displayedInfo, setDisplayedInfo] = useState([]);

  function handleInfo(props) {
    displayedInfo.length == 0 ? setDisplayedInfo(props) : setDisplayedInfo([]);
  }

  return (
    <>
      <tr className="hover h-28 md:h-52 py-8">
        <td className="md:max-w-36">
          <p className="text-lg font-bold">{props.Nombre}</p>
          <p className="text-neutral-400">
            {props.Categoría} | {props.Subcategoría}
          </p>
          {props.Teléfono != "" ? (
            <p className="flex items-center mt-3 ">
              <Image
                src="/Teléfono.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              />
              {props.Teléfono}
            </p>
          ) : null}
        </td>
        <td className="text-wrap md:max-w-[30ch]">{props.Descripción}</td>
        <td>
          <button
            className="btn btn-outline btn-success m-auto md:ml-auto block"
            onClick={() => handleInfo(props)}
          >
            Ver Más
          </button>
          <Modal
            displayedInfo={displayedInfo}
            setDisplayedInfo={setDisplayedInfo}
          />
        </td>
      </tr>
    </>
  );
}
