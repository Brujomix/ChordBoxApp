import React from "react";
import ArraySelectorNotas from "./ArraySelectorNotas.json";

export const SelectorNotas = () => {

  function handleEventclick(e) {
    const seleccionado = e.target.innerText;
    console.log(seleccionado);
  }

  return (
    <div className="SelectorNotas">
      {ArraySelectorNotas.SelectorNotas.map((e) => (
        <div className="ContainerNotas" key={e.id}>
          <button onClick={(e)=>{handleEventclick(e)}}>{e.Nota}</button>
        </div>
      ))}
    </div>
  );
};