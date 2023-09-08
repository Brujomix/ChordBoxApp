import React from "react";
import sostenido from "../../Images/introduccion/sostenido.png";
import bemol from "../../Images/introduccion/bemol.png";
import becuadro from "../../Images/introduccion/becuadro.png";

const FuncionFiguras = () => {
  return (
    <div className="FuncionesFiguras">
      <div className="checkboxtext">
        <input type="checkbox" />
        <span>Aumenta 1/2 tono</span>
      </div>
      <div className="checkboxtext">
        <input type="checkbox" />
        <span>Disminuye 1/2 tono</span>
      </div>
      <div className="checkboxtext">
        <input type="checkbox" />
        <span>Revierte Valor</span>
      </div>
    </div>
  );
};

export const IntroPreguntaTres = () => {
  return (
    <div className="IntroPreguntaTres">
      <h3>Escribe Nombre de las alteraciones</h3>
      <div className="ContainerFiguras">
        <div className="CheckAlteracion">
          <img src={sostenido} alt="Sostenido" />
          <input type="text" placeholder="Nombre de la Alteracion?" />
        </div>
          <FuncionFiguras />
        <div className="CheckAlteracion">
          <img src={becuadro} alt="Becuadro" />
          <input type="text" placeholder="Nombre de la Alteracion?" />
        </div>
          <FuncionFiguras />
        <div className="CheckAlteracion">
          <img src={bemol} alt="Bemol" />
          <input type="text" placeholder="Nombre de la Alteracion?" />
        </div>
          <FuncionFiguras />
      </div>
    </div>
  );
};
