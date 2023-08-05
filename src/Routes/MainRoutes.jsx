import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Introduccion,
  Intervalos,
  ModoMayor,
  Modomenor,
  ModosGriegos,
  Circulo5tas,
  FigurasArmomicas,
  TonicasImplicitas,
} from "../Pages";
import { Menu, Footer } from "../Components/Principales";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Introduccion" element={<Introduccion />} />
        <Route exact path="/Intervalos" element={<Intervalos />} />
        <Route exact path="/Modo_Mayor" element={<ModoMayor />} />
        <Route exact path="/Modo_menor" element={<Modomenor />} />
        <Route exact path="/Circulo_5tas" element={<Circulo5tas />} />
        <Route exact path="/Figuras_Armonicas" element={<FigurasArmomicas />} />
        <Route exact path="/Modos_Griegos" element={<ModosGriegos />} />
        <Route exact path="/Tonicas_Implicitas" element={<TonicasImplicitas />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
