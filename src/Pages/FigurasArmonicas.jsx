import React from "react";
import cerradaMayor from "../Images/figuras-armonicas/cerrada-mayor.png";
import abiertaMayor from "../Images/figuras-armonicas/abierta-mayor.png";
import cerradamenor from "../Images/figuras-armonicas/cerrada-menor.png";
import abiertamenor from "../Images/figuras-armonicas/abierta-menor.png";
import cerradaAumentados from "../Images/figuras-armonicas/cerrada-aumentados.png";
import abiertaAumentados from "../Images/figuras-armonicas/abierta-aumentados.png";
import cerradaDisminuidos from "../Images/figuras-armonicas/cerrada-disminuidos.png";
import abiertaDisminuidos from "../Images/figuras-armonicas/abierta-disminuidos.png";
import cuartasAbiertasH from "../Images/figuras-armonicas/cuarta-abierta e hibridas.png";

import cuartasAbiertasI1 from "../Images/figuras-armonicas/cuartas-abiertas-inv-fig-1.png";
import cuartasAbiertasI2 from "../Images/figuras-armonicas/cuartas-abiertas-inv-fig-2.png";
import cuartasAbiertasI3 from "../Images/figuras-armonicas/cuartas-abiertas-inv-fig-3.png";
import cuartasAbiertasI4 from "../Images/figuras-armonicas/cuartas-abiertas-inv-fig-4.png";
import cuartasAbiertasI5 from "../Images/figuras-armonicas/cuartas-abiertas-inv-fig-5.png";

import cuartasCerradaFig from "../Images/figuras-armonicas/cuarta-cerrada-figuras.png";

import cuartasCerradasI1 from "../Images/figuras-armonicas/cuartas-cerrada-inv-fig-1.png";
import cuartasCerradasI2 from "../Images/figuras-armonicas/cuartas-cerrada-inv-fig-2.png";
import cuartasCerradasI3 from "../Images/figuras-armonicas/cuartas-cerrada-inv-fig-3.png";
import cuartasCerradasI4 from "../Images/figuras-armonicas/cuartas-cerrada-inv-fig-4.png";
import { Container } from "react-bootstrap";


export const FigurasArmomicas = () => {
  return (
    <Container className="Figuras_Armonicas">
      <div>
        <h1>
          Figuras<span>(Armónicas)</span>
        </h1>
      </div>

      <div>
        <h2>Concepto:</h2>
        <p>
          El término “figura armónica” representa la impresión que es creada
          cuando combinamos intervalos específicos. La “figura armónica” básica
          está compuesta por tres tonos, lo que significa que se mide el
          intervalo desde la nota más aguda a la nota que se encuentra en medio
          (lo que crea el primer intervalo), y desde la voz de en medio a la voz
          más grave de las tres notas (lo cual crea el segundo intervalo). Sólo
          hay tres “figuras armónicas” básicas y los tonos en una “figura
          armónica” deben de estar conformados a partir de la restricción de la
          escala de la que se deriva la melodía o la nota más aguda. Vamos a ir
          desarrollando cada una de las figuras armonicas y sus posiciones
          cerradas y abiertas.
        </p>
      </div>

      <div>
        <h3>
          Figuras Armónicas <span>(Triadas Mayores)</span>
        </h3>
        <p>
          La posición mas común y básica que encontramos en las "Figuras
          Armónicas" son las puras Triadas Mayores. Los intervalos de la “figura
          armónica” de la triada mayor básica consisten como sabemos en la raíz,
          3ª mayor y 5ª perfecta, sin embargo estos tonos pueden ser colocados
          en diferentes registros u octavas entre ellos. Nosotros les llamamos a
          estas variaciones como “posiciones”: “posición cerrada”, “posición
          abierta”
        </p>
        <div>
          <img
            src={cerradaMayor}
            alt="Figuras Armonicas posicion cerrada Mayor"
          />
          <figcaption>Posición Cerrada Mayor</figcaption>
          <img
            src={abiertaMayor}
            alt="Figuras Armonicas posicion Abierta Mayor"
          />
          <figcaption>Posición Abierta Mayor</figcaption>
        </div>
      </div>

      <div>
        <h4>
          Figuras Armónicas <span>(Triadas Menores)</span>
        </h4>
        <div>
          <img
            src={cerradamenor}
            alt="Figuras Armonicas posicion cerrada menor"
          />
          <figcaption>Posicion Cerrada menor</figcaption>
          <img
            src={abiertamenor}
            alt="Figuras Armonicas posicion Abieta menor"
          />
          <figcaption>Posicion Abierta menor</figcaption>
        </div>
      </div>

      <div >
        <h4>
          Figuras Armonicas <span>(Triadas Aumentadas)</span>
        </h4>
        <div>
          <img
            src={cerradaAumentados}
            alt="Figuras Armonicas posicion cerrada Aumentada"
          />
          <figcaption>Posicion Cerrada Aumentada</figcaption>
          <img
            src={abiertaAumentados}
            alt="Figuras Armonicas posicion Abieta Aumentada"
          />
          <figcaption>Posicion Abierta Aumentada</figcaption>
        </div>
      </div>

      <div >
        <h4>
          Figuras Armonicas <span>(Triadas Disminuidos)</span>
        </h4>
        <div>
          <img
            src={cerradaDisminuidos}
            alt="Figuras Armonicas posicion cerrada Disminuidos"
          />
          <figcaption>Posicion Cerrada Aumentada</figcaption>
          <img
            src={abiertaDisminuidos}
            alt="Figuras Armonicas posicion Abieta Disminuidos"
          />
          <figcaption>Posicion Abierta Disminuidos</figcaption>
        </div>
      </div>

      <div>
        <h5>
          Otras Figuras Armonicas<span>(Cuartas Cerradas y Abiertas)</span>
        </h5>
        <p>
          Como las triadas se construyen con combinaciones consecutivas de
          intervalos de terceras mayores y menores, podemos ver que las “figuras
          armónicas” son necesarias para involucrar intervalos que no sean solo
          3as. Con las 4as abiertas la construcción de un intervalo de 3ª esta
          expandido para convertirse en un intervalo de 4ª, haciendo que la
          distancia o el espacio entre los tonos sea mayor (hemos notado que
          utilizamos el intervalo de 4ª cuando invertimos una triada en primera
          o segunda posición). Esta combinación de tonos ya se torna un poco mas
          ambiguo que las triadas y crean una impresión menos definitiva y tiene
          un sonido “flotante”, hueco, más moderno o impresionista. Hay una
          “figura armónica” básica de una 4ª abierta y cuatro variaciones
          llamadas 4as abiertas hibridas.{" "}
        </p>
        <div>
          <img
            src={cuartasAbiertasH}
            alt="Figura armonica de cuartas abiertas e hibridas"
          />
          <figcaption>Cuartas Abiertas e Híbridas</figcaption>
        </div>
        <p>
          La superposición de cuartas de la "Figura Armonica #1" es la posicion
          principal y es la menos disonante aunque genere una sensancion de no
          saber si lo que estamos ejecutando es mayor o menor, ya que no
          disponemos de 3ras, ni mayores ni menores. Por otra parte las "Figuras
          Hibridas" son conbinaciones de cuartas alteradas generando mas tension
          y son mas dificiles de escuchar por si solas y fuera de contexto
          tonal. Estos tipos de figura armonica hibrida las usaremos para
          generar extensiones especificas en los acordes.
        </p>
      </div>

      <div>
        <h4>
          Cuartas Abiertas <span>(Inversiones)</span>
        </h4>
        <div>
          <img
            src={cuartasAbiertasI1}
            alt="Figuras Armonicas posicion Abierta Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #1</figcaption>
          <img
            src={cuartasAbiertasI2}
            alt="Figuras Armonicas posicion Abierta Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #2</figcaption>
          <img
            src={cuartasAbiertasI3}
            alt="Figuras Armonicas posicion Abierta Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #3</figcaption>
          <img
            src={cuartasAbiertasI4}
            alt="Figuras Armonicas posicion Abierta Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #4</figcaption>
          <img
            src={cuartasAbiertasI5}
            alt="Figuras Armonicas posicion Abierta Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #5</figcaption>
        </div>
      </div>

      <div>
        <h4>Cuartas Cerradas e Inversiones</h4>
        <p>
          Las cuartas cerradas por otra parte plantean una vision diferente. En
          este caso partiremos de un intervalo de cuarta justa e iremos
          colocando de a una nota entre las que conforman a dicho intervalo.
        </p>
        <div>
          <img
            src={cuartasCerradaFig}
            alt="Figuras de las cuartas cerradas"
          />
          <figcaption>Cuartas cerradas Figuras</figcaption>
        </div>
        <div>
          <ul>
            <li>
              Figura #1 - La primer nota que agregamos no muestra una figura de
              4/1 (cuatro sobre uno).
            </li>
            <li>
              Figura #2 - La segunda nota que agregamos no muestra una figura de
              3/2 (cuatro sobre uno).
            </li>
            <li>
              Figura #3 - La tercera nota que agregamos no muestra una figura de
              2/3 (cuatro sobre uno).
            </li>
            <li>
              Figura #4 - La cuarta nota que agregamos no muestra una figura de
              1/4 (cuatro sobre uno).
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h4>
          Cuartas Cerradas <span>(Inversiones)</span>
        </h4>
        <div>
          <img
            src={cuartasCerradasI1}
            alt="Figuras Armonicas posicion Cerrada Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #1</figcaption>
          <img
            src={cuartasCerradasI2}
            alt="Figuras Armonicas posicion Cerrada Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #2</figcaption>
          <img
            src={cuartasCerradasI3}
            alt="Figuras Armonicas posicion Cerrada Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #3</figcaption>
          <img
            src={cuartasCerradasI4}
            alt="Figuras Armonicas posicion Cerrada Inversiones"
          />
          <figcaption>Posicion Abierta Inversion Figura #4</figcaption>
        </div>
        <p>
          Nota: Escuchar la impresion de cada figura armonica cerrada o abierta
          de modo que podamos identificarla en contexto de una tonalidad. Las
          posibilidades de convinacion de cuartas con diferentes notas en los
          bajos nos abren las puertas a nuevas sensaciones musicales.
        </p>
        <p>
          Un ejercicio muy util a la hora de practicar colores y distintos
          acordes es moverse a travez del Circulo de 4tas ya visto anteriormente
          con cada una de las posiciones e inversiones de las{" "}
          <i>"Figuras Armonicas"</i>
        </p>
      </div>

      <div>
        <h2>Agregar Conclusiones y ejerccios</h2>
      </div>
    </Container>
  );
};
