import React, { useState } from "react";
import ArrayNotas from "../../Components/Intervalos/ArrayNotas.json";

export const ContructorIntervalos = () => {
  const [notaEncontrada, setNotaEncontrada] = useState([]);
  const [tipoIntervalo, setTipoIntervalo] = useState("");
  const [notaIngresada, setNotaIngresada] = useState("");

  const ArrayIntervalos = [
    { id: 1, Nombre: "Segunda_menor" },
    { id: 2, Nombre: "Segunda_Mayor" },
    { id: 3, Nombre: "Tercera_menor" },
    { id: 4, Nombre: "Tercera_Mayor" },
    { id: 5, Nombre: "Cuarta_justa" },
    { id: 6, Nombre: "Tritono" },
    { id: 7, Nombre: "Quinta_Justa" },
    { id: 8, Nombre: "Sexta_menor" },
    { id: 9, Nombre: "Sexta_Mayor" },
    { id: 10, Nombre: "Septima_menor" },
    { id: 11, Nombre: "Septima_Mayor" },
  ];

  const handleEventGenerar = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    const res = ArrayNotas.ArrayNotas.filter((e) => e.id === randomNumber);
    setNotaEncontrada(res);
  };

  const handleIntervaloChange = (e) => {
    setTipoIntervalo(e.target.value);
  };
  const handleEventInput = (e) => {
    setNotaIngresada(e.target.value);
  };

  const handleEventVerificar = (e) => {
    console.log(e.target.value);
    console.log("Logica de Validacion");
  };

  console.log(notaIngresada);

  return (
    <div className="ConstructorIntervalos">
      <div className="NotaInput">
        <div>
          <span>Nota Inicio</span>
        </div>
        <div>
          <input
            placeholder={
              notaEncontrada.length === 0 ? "Nota" : notaEncontrada[0].Nota
            }
          />
        </div>
        <div>
          <button onClick={handleEventGenerar}>Generar Nota</button>
        </div>
      </div>
      <div className="SeleccionIntervalo">
        <span>Selecciona el Intervalo</span>
        <div id="ListaIntervalos">
          {ArrayIntervalos.map((e) => (
            <div key={e.id}>
              <input
                type="radio"
                name="intervalo"
                value={e.Nombre}
                onChange={handleIntervaloChange}
                checked={tipoIntervalo === e.Nombre}
              />
              <label>{e.Nombre}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="NotaInput">
        <div>
          <span>Escribe Resutado</span>
        </div>
        <div>
          <input
            placeholder="Nota"
            value={notaIngresada}
            onChange={handleEventInput}
          />
        </div>
        <div>
          <button onClick={handleEventVerificar}>Verificar</button>
        </div>
        <div>
          <button onClick={() => setNotaIngresada("")}>Reset</button>
        </div>
      </div>
    </div>
  );
};
