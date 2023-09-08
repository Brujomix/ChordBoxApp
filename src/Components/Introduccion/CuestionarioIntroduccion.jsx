import React from "react";
import { IntroPreguntaUno } from "./IntroPreguntaUno";
import { IntroPreguntaDos } from "./IntroPreguntaDos";
import { IntroPreguntaTres } from "./IntroPreguntaTres";

export const CuestionarioIntroduccion = () => {
  return (
    <div className="Cuestionario_Intro">
      <header>
        <h1>Comprobaremos tus conocimientos del Módulo I</h1>
      </header>
      <h2>1/10</h2>
      <section>
        <IntroPreguntaUno />
      </section>
      <h2>2/10</h2>
      <section>
        <IntroPreguntaDos />
      </section>
      <h2>3/10</h2>
      <section>
        <IntroPreguntaTres/>
      </section>
    </div>
  );
};
