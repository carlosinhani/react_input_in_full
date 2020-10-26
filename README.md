# React Input por Extenso

Componente React que retorna número por extenso

## Como instalar

Abaixo as formas de como instalar essa biblioteca utilizando o npm ou yarn:

```

npm install react_imput_por_extenso
# ou
```

## Como usar

uma forma básica de como utilizar o componente:

```jsx

import React, { useState } from "react";
import ReactDom from "react-dom";
import ReactInputPorExtenso from "react_imput_por_extenso";

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
```
## Propriedades

Essa componente é uma abstração de um componente input do tipo numérico,
todas as propriedades de um input estão disponíveis.

| Propriedade | Valor inicial |  Tipo  |           Descrição           |
| ------------|---------------|--------|-------------------------------|
| tipoExtenso |    normal     | string | formato de ectensão do número | 