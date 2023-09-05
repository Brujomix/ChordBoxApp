import React from "react";
import ArraySelectorNotas from "./ArraySelectorNotas.json";

export const SelectorNotas = ({mostrar, clickClose, clickNota}) => {

  return (
    
    <div className={mostrar ? "SelectorNotasOn" : "SelectorNotasOff"}>
      {ArraySelectorNotas.SelectorNotas.map((e) => (
        <div className="ContainerNotas" key={e.id}>
          <button onClick={clickNota}>{e.Nota}</button>
        </div>
      ))}
    <div>
      <button onClick={clickClose}>Close</button>
    </div>
    </div>

  );
};