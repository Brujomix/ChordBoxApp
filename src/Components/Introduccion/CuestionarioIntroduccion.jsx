import React from "react";
import { Intro_PreguntaUno } from "./Intro_PreguntaUno";
import { Intro_PreguntaDos } from "./Intro_PreguntaDos";

export const CuestionarioIntroduccion = () => {
  return (
    <div className="Cuestionario_Intro">
      <header>
        <h1>Comprobaremos tus conocimientos del Módulo I</h1>
      </header>
      <h2>Pregunta 1/10:</h2>
      <section>
        <Intro_PreguntaUno />
      </section>
      <h2>Pregunta 2/10:</h2>
      <section>
        <Intro_PreguntaDos />
      </section>
    </div>
  );
};
