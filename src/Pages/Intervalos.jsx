import React from "react";
import escalaC from "../Images/intervalos/escalac.png";
import estructuraC from "../Images/intervalos/estructurac.png";
import tetracordes from "../Images/intervalos/tetracordesescalas.png";
import {
  ConstructorEscalas,
  ContructorIntervalos,
  TablaIntervalos,
} from "../Components/Intervalos";

import { Container } from "react-bootstrap";

export const Intervalos = () => {
  return (
    <Container className="Intervalos">
      <div>
        <h1>Intervalos</h1>
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
          principales, podemos definir que esta escala mayor de C puede dejarnos
          implicitamente una estructura de Tonos y Semitonos. El objetivo
          principal de tener una estructura de tonos y semitonos (Distancia
          entre notas de una escala mayor), es que como bien sabemos que tenemos
          12 tonalidades diferentes, podamos trasladar esa estructura hacia otra
          tonalidad y poder deducir que notas conforman a dicha escala.
        </p>

        <div>
          <img src={estructuraC} alt="Estructura de la escala Mayor" />
          <figcaption>Estructura de las Escalas Mayores</figcaption>
        </div>

        <p>
          <span>Estructura final de una escala Mayor:</span>
          <span>T - T - S/T - T - T - T - S/T</span>
          <i>"mover esta estructura a las otras tonalidades"</i>
        </p>
      </div>

      <div>
        <h3>Intervalos, distancias y sus nombres</h3>
        <TablaIntervalos />
      </div>

      <div>
        <h3>Regla del 9:</h3>
        <p>
          Como hemos observado que de manera ascendente y hasata llegar a la
          octava, podemos ir descubriendo cada uno de los intervalos que se
          forman en los 12 semitonos que conforman a la octava. Es claro que las
          melodias se componen basicamente de intervalos unidos de una forma
          ritmica, pero tambien notamos que no siempre son de forma ascendente.
          Por ese motivo podemos pensar los intervalos de una forma descendente.
          Es en este punto donde aparece la <i>Regla del 9</i>. Esta regla nos
          ayuda a no estar pensando tanto en Tonos y Semitonos. Imaginemos que
          esta pregunta: ¿Cual es la 6ta menor de Gb?. Te pondrias a contar 8
          semitonos ascendente hasta llegar a la nota ?. Que tiempo nos llevaria
          encontrarla ?. Aqui es donde la <i>Regla del 9</i> nos ayuda.
        </p>
        <p>
          La regla del 9 en música es una forma rápida y útil de determinar el
          nombre de un intervalo musical invertido. Para aplicar la regla del 9,
          sigue estos pasos: Toma el intervalo original y cuenta cuántas letras
          diferentes hay entre las dos notas involucradas, incluyendo ambas
          notas. Resta esa cantidad de letras al número 9. El número resultante
          te dará el nombre del intervalo invertido. Por ejemplo, supongamos que
          tenemos el intervalo ascendente de una tercera mayor (por ejemplo, de
          C a E). Aplicamos la regla del 9: Hay tres letras diferentes entre C y
          E (C-D-E), incluyendo ambas notas. Restamos 3 a 9: 9 - 3 = 6. El
          número resultante es 6. Entonces, el intervalo invertido del intervalo
          original de una tercera mayor será un intervalo de sexta mayor. En
          este caso, si invertimos la dirección de la tercera mayor (C-E) y la
          tocamos descendente, obtendremos la sexta mayor (E-C). Otro ejemplo:
          Consideremos el intervalo ascendente de una quinta justa (por ejemplo,
          de G a D): Hay cinco letras diferentes entre G y D (G-A-B-C-D),
          incluyendo ambas notas. Restamos 5 a 9: 9 - 5 = 4. El número
          resultante es 4. Por lo tanto, el intervalo invertido del intervalo
          original de una quinta justa será un intervalo de cuarta justa. Si
          invertimos la dirección de la quinta justa (G-D) y la tocamos
          descendente, obtendremos la cuarta justa (D-G). La regla del 9 es útil
          para agilizar la identificación de intervalos invertidos sin necesidad
          de contar semitonos o analizar las notas individualmente.
        </p>
        <p>
          Pensemos en 7ma menor: Tomemos el intervalo original y cuenta cuántas
          letras diferentes hay entre las dos notas involucradas, incluyendo
          ambas notas. Resta esa cantidad de letras al número 9. Veamos un
          ejemplo con el intervalo de séptima menor, que sería desde C a Bb (Do
          a Si bemol): Hay siete letras diferentes entre C y Bb
          (C-D-E-F-G-A-Bb), incluyendo ambas notas. Restamos 7 a 9: 9 - 7 = 2.
          El número resultante es 2. Entonces, el intervalo invertido del
          intervalo original de séptima menor será un intervalo de segunda
          menor. En este caso, si invertimos la dirección de la séptima menor
          (C-Bb) y la tocamos descendente, obtendremos una segunda menor (Bb-C).
          Recuerda que al aplicar la regla del 9, estás encontrando el intervalo
          invertido contando desde la nota más alta del intervalo original hasta
          la nota más baja del intervalo invertido. Esto puede requerir que
          desplaces octavas para determinar el intervalo invertido
          correctamente.
        </p>
        <p>
          <b>Se pusieron a pensar que pasa en el TRITONO ?.</b>
        </p>
        <p>
          El tritono es un intervalo de 3 tonos completos (equivalente a 6
          semitonos). Este intervalo divide a la octava a la mitad exactamente
          por lo que <b>el tritono es su propio intervalo invertido</b>, lo que
          significa que si inviertes un tritono, siempre obtendrás otro tritono.
          Es uno de los intervalos más disonantes en la música y tiene una
          sonoridad muy característica y tensa. Por esta razón, a veces se le
          conoce como la "quinta disminuida" debido a su distancia de 3 tonos
          completos o 6 semitonos.
        </p>
      </div>
      <div>
        <h5>
          Nota: Cuando construimos intervalos y queremos incluirlos en un
          pentagrama debemos tener un extremo cuidado al momento de los nombres
          de las notas.
        </h5>
        <p>
          Como vimos en el capitulo de introduccion, podemos encontrar una misma
          nota con varias nomenclaturas. Ej: (C es la misma sonoridad que B# o
          Dbb ). Pero aunque sea la misma sonoridad, no es lo mismo verlo
          escrito en un pentagrama u hoja. Para aclarar esto veamos algunos
          ejemplos:
        </p>
        <ul>
          <li>Pongamos un ejemplo en E</li>
          <li>Quien es la 5ta Justa de E ? : (B)</li>
          <li>Pero la #5ta(aumentada)? seria C o B# ? (Enarmonicas)</li>
        </ul>
        <p>
          Por regla hay que basarse siempre en la nota original, en el caso anterior, la #5ta de E es B# y (<b>No C</b>) porque C es la 5ta Justa de (F) 
          y si quisieramos disminuir la Quinta de de F seria Cb y no B
        </p>
      </div>
      <div>
        <h4>Ejercicio, Constructor de Intervalos</h4>
        <span>
          Dejamos esta seccion para contruir intervalos de una manera mas
          practica y visual.
        </span>
        <h5>Constructor de Intervalos</h5>
        <ContructorIntervalos />
      </div>

      <div>
        <h4>Tetracordes</h4>
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
          <img src={tetracordes} alt="Tetracordes de las escalas" />
          <figcaption>Tetracordes de las Escalas Mayores</figcaption>
        </div>
      </div>

      <div>
        <h4>Ejercicio, Constructor de Escalas</h4>
        <span>
          Dejamos esta seccion para contruir escalas de una manera mas practica
          y visual.
        </span>
        <h5>Constructor de Escalas Mayores</h5>
        <ConstructorEscalas />
      </div>
    </Container>
  );
};
