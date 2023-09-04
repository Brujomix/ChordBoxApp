import React, { useState } from "react";
import { SelectorNotas } from "./SelectorNotas";

const checkValue = (e, nodo, Nota, Enarmonico1, Enarmonico2) => {
  const res = e.target.value;
  if (res === Nota || res === Enarmonico1 || res === Enarmonico2) {
    nodo.style.color = "#000";
    nodo.style.background = "#0f0";
  } else {
    nodo.style.color = "#fff";
    nodo.style.background = "#f00f";
  }
};

const resetValues = () => {
  document.getElementById("inputC").value = "";
  document.getElementById("inputCsostenido").value = "";
  document.getElementById("inputD").value = "";
  document.getElementById("inputDsostenido").value = "";
  document.getElementById("inputE").value = "";
  document.getElementById("inputF").value = "";
  document.getElementById("inputFsostenido").value = "";
  document.getElementById("inputG").value = "";
  document.getElementById("inputGsostenido").value = "";
  document.getElementById("inputA").value = "";
  document.getElementById("inputAsostenido").value = "";
  document.getElementById("inputB").value = "";
};

export const Ej_Notas_Alteracionescopy = () => {
  const [muestraSelector, setMuestraSelector] = useState(false);
  const [notaSeleccionada, setNotaSeleccionada] = useState("");

  return (
    <>
      <button onClick={resetValues}>Reset</button>
      <div className="Ej_Notas_Alteraciones">
        <div className="ContainerNotasNegras">
          <div className="NotasNegras1">
            <input
              placeholder="?"
              id="inputCsostenido"
              value={notaSeleccionada}
              onChange={(e) =>
                checkValue(
                  e,
                  document.getElementById("inputCsostenido"),
                  "C#",
                  "Db",
                  "Bx"
                )
              }
              onFocus={() => setMuestraSelector(true)}
            />
            <input
              placeholder="?"
              id="inputDsostenido"
              onChange={(e) =>
                checkValue(
                  e,
                  document.getElementById("inputDsostenido"),
                  "D#",
                  "Eb",
                  "Ebb"
                )
              }
              onFocus={() => setMuestraSelector(true)}
            />
          </div>
          <div className="NotasNegras2">
            <input
              placeholder="?"
              id="inputFsostenido"
              onChange={(e) =>
                checkValue(
                  e,
                  document.getElementById("inputFsostenido"),
                  "F#",
                  "Gb",
                  "Ex"
                )
              }
              onFocus={() => setMuestraSelector(true)}
            />
            <input
              placeholder="?"
              id="inputGsostenido"
              onChange={(e) =>
                checkValue(
                  e,
                  document.getElementById("inputGsostenido"),
                  "G#",
                  "Ab",
                  "Fx"
                )
              }
              onFocus={() => setMuestraSelector(true)}
            />
            <input
              placeholder="?"
              id="inputAsostenido"
              onChange={(e) =>
                checkValue(
                  e,
                  document.getElementById("inputAsostenido"),
                  "A#",
                  "Bb",
                  "Gx"
                )
              }
              onFocus={() => setMuestraSelector(true)}
            />
          </div>
        </div>
        <div className="NotasBlancas">
          <input
            placeholder="?"
            id="inputC"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputC"), "C", "B#", "Dbb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            placeholder="?"
            id="inputD"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputD"), "D", "Cx", "Ebb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            placeholder="?"
            id="inputE"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputE"), "E", "Dx", "Fb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            placeholder="?"
            id="inputF"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputF"), "F", "E#", "Gbb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            placeholder="?"
            id="inputG"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputG"), "G", "Fx", "Abb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            placeholder="?"
            id="inputA"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputA"), "A", "Bbb", "Gx")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            placeholder="?"
            id="inputB"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputB"), "B", "Cb", "Ax")
            }
            onFocus={() => setMuestraSelector(true)}
          />
        </div>
      </div>
      <SelectorNotas
        mostrar={muestraSelector}
        clickCheck={_ => checkValue()}
        clickClose={_ => setMuestraSelector(false)}
        clickNota={(e)=>setNotaSeleccionada(e.target.innerText)}
      />
    </>
  );
};
