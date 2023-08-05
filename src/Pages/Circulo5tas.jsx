import React from "react";
import circulo5tas from "../Images/circulo4tas/circulo4tas.png";
import { Container } from "react-bootstrap";

export const Circulo5tas = () => {
  return (
    <Container className="Circulo_Quintas">
      <div>
        <h1>
          Circulo <span>(4ta o 5ta)</span>
        </h1>
      </div>

      <div>
        <h2>Conceptos de 4tas y 5tas</h2>
        <p>
          El círculo de Cuartas y Quintas es un método desarrollado para poder
          comprender que alteraciones contienen las tonalidades Mayores de una
          manera muy práctica. A demás agrega también sus grados relativos
          menores en cada caso. En la imagen inferior vemos que si nos
          desplazáramos hacia la derecha iríamos por quintas ascendentes, es
          decir, intervalo de 3 ½ tonos desde cada tónica. Al ir avanzando
          iremos sumado a la armadura de clave las notas que se encuentran
          anteriores a esa tonalidad pasando por encima de la tonalidad vecina
          anterior. Por Ej: Si estamos en Sol (que tiene una alteración en su
          armadura de clave), será en este caso fa#. Ahora si pasamos una quinta
          ascendente de SOL, entonces estaríamos posicionados en RE y sus
          alteraciones serian FA# y DO#. Si seguimos, pasaríamos a LA y tendría
          FA#, DO# y SOL#, (saltando la tonalidad vecina anterior que es RE) y
          así sucesivamente. En el caso de las cuartas es diferente. Si nos
          posicionamos en FA, la alteración que le corresponde es SIb. Ahora
          bien si continuamos una cuarta ascendente estaríamos posicionados en
          SIb y las alteraciones que le corresponden son SIb y Mib. En la
          posición de Mib, le corresponde SIb, Mib y LAb. Y así sucesivamente.
        </p>
      </div>

      <div>
        <img src={circulo5tas} alt="Circulo de cuartas y quintas" />
      </div>
      <div>
        <p>
          Las notas que se encuentran en el interior del circulo de cuartas y
          quintas corresponden a las tonalidades menores pertenecientes a la
          relativa menor de cada tonalidad mayor. Esto quiere decir que si
          estaríamos en la tonalidad mayor de Lab, su relativa menor que se
          encuentra en el 6to grado de la escala mayor o mejor dicho a una
          tercera menor descendente de la tónica, le corresponden las mismas
          alteraciones que la escala mayor en dicha tonalidad. Dictado el
          ejemplo de LAb, que sus alteraciones son (Bb, Eb, Ab Y Db), las mismas
          alteraciones pertenecen a las escala menor natural de la tonalidad de
          Fm.
        </p>

        <p>
          Así de esta manera obtenemos más recursos a la hora de armar una
          escala o relacionar las alteraciones de una escala mayor con las
          alteraciones de la escala relativa menor de cada tonalidad. No es
          necesario aprenderse todas las escalas individuales, si no que consta
          con relacionar a cada escala con su relativa. Para poner en práctica
          este método es necesario armar la escala Mayor con sus alteraciones y
          luego ejecutar las mismas alteraciones partiendo de la tónica que
          asigna su relativa menor.
        </p>
      </div>
    </Container>
  );
};
