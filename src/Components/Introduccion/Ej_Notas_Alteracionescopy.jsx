import React from "react";

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
  document.getElementById("inputA").value =  "";
  document.getElementById("inputAsostenido").value = "";
  document.getElementById("inputB").value = "";
};

export const Ej_Notas_Alteracionescopy = () => {
  return (
    <>
      <button onClick={resetValues}>Reset</button>
      <div className="Ej_Notas_Alteraciones">
        <div className="ContainerNotasNegras">
          <div className="NotasNegras1">
            <input
              placeholder="?"
              id="inputCsostenido"
              onChange={(e) =>
                checkValue(
                  e,
                  document.getElementById("inputCsostenido"),
                  "C#",
                  "Db",
                  "Bx"
                )
              }
              onFocus={(e)=> e.target.value = "E"}
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
          />
          <input
            placeholder="?"
            id="inputD"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputD"), "D", "Cx", "Ebb")
            }
          />
          <input
            placeholder="?"
            id="inputE"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputE"), "E", "Dx", "Fb")
            }
          />
          <input
            placeholder="?"
            id="inputF"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputF"), "F", "E#", "Gbb")
            }
          />
          <input
            placeholder="?"
            id="inputG"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputG"), "G", "Fx", "Abb")
            }
          />
          <input
            placeholder="?"
            id="inputA"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputA"), "A", "Bbb", "Gx")
            }
          />
          <input
            placeholder="?"
            id="inputB"
            onChange={(e) =>
              checkValue(e, document.getElementById("inputB"), "B", "Cb", "Ax")
            }
          />
        </div>
      </div>
    </>
  );
};
