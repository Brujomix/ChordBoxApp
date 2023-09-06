import React, { useState } from "react";
import { SelectorNotas } from "./SelectorNotas";

export const Ej_Notas_Alteraciones = () => {
  const [muestraSelector, setMuestraSelector] = useState(false);

  const [notaSeleccionada, setNotaSeleccionada] = useState("");

  const [notaDoSost, setNotaDoSost] = useState("");
  const [notaReSost, setNotaReSost] = useState("");

  const [notaFaSost, setNotaFaSost] = useState("");
  const [notaSolSost, setNotaSolSost] = useState("");
  const [notaLaSost, setNotaLaSost] = useState("");

  const [notaDo, setNotaDo] = useState("");
  const [notaRe, setNotaRe] = useState("");
  const [notaMi, setNotaMi] = useState("");
  const [notaFa, setNotaFa] = useState("");
  const [notaSol, setNotaSol] = useState("");
  const [notaLa, setNotaLa] = useState("");
  const [notaSi, setNotaSi] = useState("");
  
  const checkValue = ( Nota ,Enarmonico1, Enarmonico2) => {
    const currentNodo = document.getElementById(`${Nota}`)
    if (
     notaSeleccionada === Nota ||
     notaSeleccionada === Enarmonico1 ||
     notaSeleccionada === Enarmonico2
   ) {
    currentNodo.style.color = "#000";
    currentNodo.style.background = "#0f0";
   } else {
    currentNodo.style.color = "#fff";
    currentNodo.style.background = "#f00f";
   }
  };

  return (
    <>
      <div className="Ej_Notas_Alteraciones">
        <div className="ContainerNotasNegras">
          {/* Notas Negras 1 */}

          <div className="NotasNegras1">
            <input
            id="C#" 
            defaultValue={notaSeleccionada === "" ? "" : notaSeleccionada}
            placeholder="?" 
            onClick={()=>{
              setMuestraSelector(true);
              checkValue("C#", "Db", "Bx");
            }}
            />

            <input 
            id="D#" 
            placeholder="?" 
            onFocus={()=>{
              setMuestraSelector(true)      
            }}
            />
          </div>

          {/* Notas Negras 2 */}
          <div className="NotasNegras2">
            <input name="F#" placeholder="?" id="inputFsostenido" />
            <input name="G#" placeholder="?" id="inputGsostenido" />
            <input name="A#" placeholder="?" id="inputAsostenido" />
          </div>

        </div>

        {/* Notas Blancas */}
        <div className="NotasBlancas">
          <input name="C" placeholder="?" id="inputC" />
          <input name="D" placeholder="?" id="inputD" />
          <input name="E" placeholder="?" id="inputE" />
          <input name="F" placeholder="?" id="inputF" />
          <input name="G" placeholder="?" id="inputG" />
          <input name="A" placeholder="?" id="inputA" />
          <input name="B" placeholder="?" id="inputB" />
        </div>
      </div>
      <SelectorNotas
        mostrar={muestraSelector}
        clickClose={(_) => setMuestraSelector(false)}
        clickNota={(e) => {
          setNotaSeleccionada(e.target.innerText);
        }}
      />
    </>
  );
};
