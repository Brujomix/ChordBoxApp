import React, { useState } from "react";
import ArrayNotas from "../../Components/Intervalos/ArrayNotas.json";
import Intervalos from "../../Components/Intervalos/ArrayIntervalosResultados.json";
import IntervalosNombres from "../../Components/Intervalos/ArrayIntervalosNombres.json";

export const ContructorIntervalos = () => {
  const [notaEncontrada, setNotaEncontrada] = useState("");
  const [tipoIntervalo, setTipoIntervalo] = useState("");
  const [objVerificacion, setObjVerificacion] = useState({});
  const [iconoRespueta, setIconoRespuesta] = useState(false);

  const handleEventGenerar = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    const res = ArrayNotas.ArrayNotas.filter((e) => e.id === randomNumber);
    setNotaEncontrada(res[0].Nota);
  };
  
  const handleIntervaloChange = (e) => {
    setTipoIntervalo(e.target.value);
  };

  const handleEventIngresado = (e) => {
    const objIntervalo={
      Nota:notaEncontrada,
      Intervalo:tipoIntervalo,
      ValorIngresado: e.target.value
    }
    setObjVerificacion(objIntervalo);
  };

  const handleEventVerificar = () => {

    for (let index = 0; index < Intervalos.IntervalosResultados.length; index++) {
      if(JSON.stringify(Intervalos.IntervalosResultados[index]) === JSON.stringify(objVerificacion)){
        setIconoRespuesta(true)
        break;
      }else{
        setIconoRespuesta(false)
      }
    }
  };

  return (
    <div className="ConstructorIntervalos">
      <div className="NotaInput">
        <div>
          <span>Nota Inicio</span>
        </div>
        <div>
          <input
            placeholder={
              notaEncontrada.length === 0 ? "Nota" : notaEncontrada
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
          {IntervalosNombres.ArrayIntervalos.map((e) => (
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
            onChange={handleEventIngresado}
          />
        </div>
        <div>
          <button onClick={handleEventVerificar}>Verificar</button>
        </div>
        <div>
          {iconoRespueta ? "Excelente" : "Intenta Nuevamente"}
        </div>
      </div>
        <div>
          <p>Debes Ingresar todos los campos y las notas del resultado en Mayuscula</p>
        </div>
    </div>
  );
};
