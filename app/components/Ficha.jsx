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
    setDisplayedInfo(props);
    console.log(props);
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
          <button onClick={() => handleInfo(props)}>Click</button>
          <Modal
            displayedInfo={displayedInfo}
            setDisplayedInfo={setDisplayedInfo}
          />
        </td>
        <td></td>
      </tr>
    </>
  );
}
