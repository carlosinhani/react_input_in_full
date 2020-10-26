import React, { useState } from "react";
import ReactDom from "react-dom";
import ReactInputPorExtenso from "../lib";

const App = () => {
  const [numero, setNumero] = useState("");
  return (
    <>
       <ReactInputPorExtenso
         tipoExtenso="monetario"
         onChange={numeroExtenso => setNumero(numeroExtenso)}
       />
       <p>
         <strong>Número por extenso</strong>: {numero}     
       </p>
    </>   
  );
};

ReactDom.render(<App />, document.getElementById("root"));