import React from "react";
import escalaC from "../Images/intervalos/escalac.png";
import estructuraC from "../Images/intervalos/estructurac.png";
import tetracordes from "../Images/intervalos/tetracordesescalas.png";
import pentagramaSol from "../Images/intervalos/pentagramasol.png";
import { Container } from "react-bootstrap";

export const Intervalos = () => {
  return (
    <Container className="Intervalos">
      <div>
        <h1>
          Intervalos
        </h1>
      </div>

      <div>
        <h2>Escala de C:</h2>
        <p>
          Por definicion un intervalo es la distancia que exite entre dos notas
          musicales. A partir de ellos podemos construir melodías, armonias y
          escalas. El mas "pequeño" de estos intervalos, y llamado asi porque es
          la distancia mas corta que tenemos entre dos notas (para instrumentos
          temperados, de afincion precisa), es la <i>2da menor</i> formado por 1
          semitono o 1/2 tono. Siguiendo de menor a mayor, el intervalo que le
          sigue en la lista es la <i>2da Mayor</i>, conformado por 2 semitonos o
          1 Tono. En la sigueinte imagen dejamos una tabla especifica para cado
          uno de los intevalos y su distancia en semitonos. Cabe aclarar que
          cada musico toma una regla para contar intervalos o aprenderselos de
          manera practica, mas adelante veremos la regla del 9 para comprender
          mejor este tema tan importante. Pero podemos contar por semitonos,
          tonos y semitonos o aprendernos la regla del 9. Elige tu mejor opcion,
          al que mas se adatpte a tu forma de comprender.
        </p>

        <div>
          <img src={escalaC} alt="Escala de Do Mayor" />
          <figcaption>Notas de la escala de Do(Mayor)</figcaption>
        </div>

        <p>
          Observando la imagen podemos ver en el piano graficando la escala
          musical natural mayor de C y su respectiva posición en el pentagrama.
          Esta escala se le llama asi porque no contine ninguna alterarcion y
          son notas consecutivas "Blancas" quea vaa de la nota C3(do) hasta su
          8va correspondiente C4(do). Como ya hemos visto los intervalos
          principales, podemos defini que esta escala mayor de C puede dejarnos
          implicitamente una estructura de Tonos y Semitonos. El objetivo
          principal de tener una estructura de tonos y semitonos (Distancia
          entre notas de una escala mayor), es que como bien sabemos que tenemos
          12 tonalidades diferentes, podamos trasladar esa estructura hacia otra
          tonalidad y poder deducir que notas conforman a dicha escala.
        </p>

        <div>
          <img
            src={estructuraC}
            alt="Estructura de la escala Mayor"
          />
          <figcaption>Estructura de las Escalas Mayores</figcaption>
        </div>

        <p>
          <span>Estructura final de una escala Mayor:</span>
          <span>T - T - S/T - T - T - T - S/T</span>
          <i>"mover esta estructura a las otras tonalidades"</i>
        </p>

        <h3>Tetracordes</h3>
        <p>
          Veamos otra manera de ver las escalas. Esposible partir a las esclas
          en dos partes llamadas "Tetracordes".Se puede decir que cada uno de
          estos "Tetracordes" parten a la escala en dos partes iguales. Para una
          cuestion auditiva es recomendable tocar el Tetracorde inferior de
          manera ascendente y el Tetracorde superior de forma descendente. Asi
          de esa manera tendriamos a la nota raiz o tonalidad en el centro.
          "Como si todo llevara a caer a la tonalidad".
        </p>

        <div>
          <img
            src={tetracordes}
            alt="Tetracordes de las escalas"
          />
          <figcaption>Tetracordes de las Escalas Mayores</figcaption>
        </div>
      </div>

      <div>
        <h4>Ejercicio Intervalos y Escalas</h4>
        <span>
          Dejamos esta seccion para contruir intervalos y escalas de una manera
          mas practica y visual.
        </span>
        <div>
          <h5>Constructor de Intervalos</h5>
          <div >
            <div >
              <span>Elige una Nota</span>

              <button>Nota</button>
            </div>
            <div>
              <span>Elige un intevalo</span>
              <button>Intervalo</button>
            </div>
            <div >
              <span>Resultado</span>
              <textarea name="" id="resultado" cols="1" rows="1"></textarea>
            </div>
            <div>
              <span>Distancia en Semitonos</span>
              <textarea name="" id="resultado" cols="1" rows="1"></textarea>
            </div>
            <div>
              <img src={pentagramaSol} alt="Pentagrama Sol" />
            </div>
          </div>
        </div>
        <div>
          <h5>Constructor de Escalas</h5>
          <div>
            <span>Elige una Tonalidad</span>
            <button>Nota</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
