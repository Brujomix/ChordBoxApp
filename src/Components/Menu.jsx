import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Menu = () => {
  return (
    <div className="Menu">
      <Navbar expand="md" className="bg-body-tertiary w-100">
        <Container>
          <Navbar.Brand href="/">Chord Box APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">   
              <Nav.Link href="/Introduccion">Introduccion</Nav.Link>
              <Nav.Link href="/Intervalos">Intervalos</Nav.Link>
              <Nav.Link href="/Modo_Mayor">Modo Mayor</Nav.Link>
              <Nav.Link href="/Modo_menor">Modo menor</Nav.Link>
              <Nav.Link href="/Circulo_5tas">Circulo 5tas</Nav.Link>
              <Nav.Link href="/Figuras_Armonicas">Figuras Armonicas</Nav.Link>
              <Nav.Link href="/Modos_Griegos">Modos Griegos</Nav.Link>
              <Nav.Link href="/Tonicas_Implicitas">Tonicas Implicitas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
