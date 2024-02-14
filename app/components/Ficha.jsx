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
      <tr className="hover">
        <td>
          <p>
            {props.Nombre}
            <br></br>
            {props.Teléfono}
          </p>
        </td>
        <td>{props.Descripción}</td>
        <td>
          <button onClick={() => handleInfo(props)}>Ver Más</button>
          <Modal
            displayedInfo={displayedInfo}
            setDisplayedInfo={setDisplayedInfo}
          />
        </td>
      </tr>
    </>
  );
}
