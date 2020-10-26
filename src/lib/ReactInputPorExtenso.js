import React from 'react';
import PropTypes from "prop-types";
import numero from "numero-por-extenso";

const ReactInputPorExtenso = ({ tipoExtenso, onChange}) => (
     <input
       type="number"
       onChange={(e) => {
       const numeroPorExtenso = numero.porExtenso(e.target.value,
        numero.estilo[tipoExtenso]
       );
       onChange(numeroPorExtenso, e);
    }}
    {...props}
  />
); 

ReactInputPorExtenso.PropTypes = {
    tipoExtenso: PropTypes.oneOf (["normal", "monetario", "porcetagem"])
};

ReactInputPorExtenso.defaultPropz = {
   tipoExtenso: "normal"
};

export default ReactInputPorExtenso;