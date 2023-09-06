import React from "react";
import { IntroPreguntaUno } from "./IntroPreguntaUno";
import { IntroPreguntaDos } from "./IntroPreguntaDos";

export const CuestionarioIntroduccion = () => {
  return (
    <div className="Cuestionario_Intro">
      <header>
        <h1>Comprobaremos tus conocimientos del Módulo I</h1>
      </header>
      <h2>Pregunta 1/10:</h2>
      <section>
        <IntroPreguntaUno />
      </section>
      <h2>Pregunta 2/10:</h2>
      <section>
        <IntroPreguntaDos />
      </section>
    </div>
  );
};
