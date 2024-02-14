import { useState } from "react";

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
      <tr className="hover h-28">
        <td className="md:max-w-36">
          <p className="text-lg font-bold">{props.Nombre}</p>
          <p>{props.Teléfono}</p>
        </td>
        <td className="text-wrap max-w-[30ch]">{props.Descripción}</td>
        <td>
          <button
            className="btn btn-outline btn-success"
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
