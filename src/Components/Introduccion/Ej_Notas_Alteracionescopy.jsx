import React, { useState } from "react";
import { SelectorNotas } from "./SelectorNotas";

export const Ej_Notas_Alteracionescopy = () => {
  const [muestraSelector, setMuestraSelector] = useState(false);

  const [notaSeleccionada, setNotaSeleccionada] = useState("");

  const [notaDoSost, setNotaDoSost] = useState("")
  const [notaReSost, setNotaReSost] = useState("")

  const [notaFaSost, setNotaFaSost] = useState("")
  const [notaSolSost, setNotaSolSost] = useState("")
  const [notaLaSost, setNotaLaSost] = useState("")

  const [notaDo, setNotaDo] = useState("")
  const [notaRe, setNotaRe] = useState("")
  const [notaMi, setNotaMi] = useState("")
  const [notaFa, setNotaFa] = useState("")
  const [notaSol, setNotaSol] = useState("")
  const [notaLa, setNotaLa] = useState("")
  const [notaSi, setNotaSi] = useState("")

  const checkValue = (nodo, Nota, Enarmonico1, Enarmonico2) => {
    
    if (
      notaSeleccionada === Nota ||
      notaSeleccionada === Enarmonico1 ||
      notaSeleccionada === Enarmonico2
    ) {
      nodo.style.color = "#000";
      nodo.style.background = "#0f0";
      nodo.value = notaSeleccionada
    } else {
      nodo.style.color = "#fff";
      nodo.style.background = "#f00f";
      nodo.value = notaSeleccionada
    }
  };
  
  return (
    <>
      <div className="Ej_Notas_Alteraciones">
        <div className="ContainerNotasNegras">
          {/* Notas Negras 1 */}

          <div className="NotasNegras1">
            <input
              name="C#"
              id="inputCsostenido"
              placeholder="?"
              onClick={() => {
                setMuestraSelector(true);
                checkValue(
                  document.getElementById("inputCsostenido"),
                  "C#",
                  "Db",
                  "Bx"
                );
              }}
            />

            <input
              name="D#"
              value={notaReSost}
              placeholder="?"
              id="inputDsostenido"
              onFocus={() => setMuestraSelector(true)}
            />
          </div>
          {/* Notas Negras 2 */}
          <div className="NotasNegras2">
            <input
              name="F#"
              placeholder="?"
              value={notaFaSost}
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
              name="G#"
              placeholder="?"
              value={notaSolSost}
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
              name="A#"
              placeholder="?"
              value={notaLaSost}
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
        {/* Notas Blancas */}
        <div className="NotasBlancas">
          <input
            placeholder="?"
            name="C"
            value={notaDo}
            id="inputC"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputC"), "C", "B#", "Dbb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            name="D"
            placeholder="?"
            value={notaRe}
            id="inputD"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputD"), "D", "Cx", "Ebb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            name="E"
            placeholder="?"
            value={notaMi}
            id="inputE"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputE"), "E", "Dx", "Fb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            name="F"
            placeholder="?"
            value={notaFa}
            id="inputF"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputF"), "F", "E#", "Gbb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            name="G"
            placeholder="?"
            value={notaSol}
            id="inputG"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputG"), "G", "Fx", "Abb")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            name="A"
            placeholder="?"
            value={notaLa}
            id="inputA"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputA"), "A", "Bbb", "Gx")
            }
            onFocus={() => setMuestraSelector(true)}
          />
          <input
            name="B"
            placeholder="?"
            value={notaSi}
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
        clickClose={(_) => setMuestraSelector(false)}
        clickNota={(e) => {
          setNotaSeleccionada(e.target.innerText);
        }}
      />
    </>
  );
};
