import React from "react";
import dedos from "../Images/introduccion/dedosmanos.png";
import cifradoamericano from "../Images/introduccion/cifradoamericano.png";
import sostenido from "../Images/introduccion/sostenido.png";
import bemol from "../Images/introduccion/bemol.png";
import becuadro from "../Images/introduccion/becuadro.png";
import alteraciones from "../Images/introduccion/alteracionespiano.png";
import enarmonicos from "../Images/introduccion/panel-enarmonicos.png";
import valoresfigurasbinarias from "../Images/introduccion/valores y silencios de las figuras.png";
import figurapartes from "../Images/introduccion/figura_partes.png";
import figurapuntillo from "../Images/introduccion/figura_puntillo.png";
import valoresfigurasternarias from "../Images/introduccion/valores y silencios de las figuras ternarias.png";
import { Container } from "react-bootstrap";
import {
  Ej_Notas_Alteraciones,
  Ej_Notas_Alteracionescopy,
} from "../Components/Introduccion";
import { SelectorNotas } from "../Components/Introduccion";

export const Introduccion = () => {
  return (
    <Container className="Introduccion">
      <header>
        <h1>Modulo I</h1>
        <h2>Introducción</h2>
        <span>(Primeros Pasos)</span>
      </header>

      <h3>Identificación de los Dedos:</h3>
      <section>
        <p>
          Es de vital importancia mantener una técnica al ejecutar cualquier
          instrumento. Con esto lograremos estar mas sueltos al tocar y asi
          evitar cualquier problema de tensiones musculares mas adelante. En la
          siguiente imagen podemos obsevar como vamos a enumerar a nuestros
          dedos para asi desarrollar la técnica y saber que dedo va en ta o cual
          nota o con que dedos tocariamos alguna inversion de acorde. Tambien lo
          usaremos para escribir la <i>Digitacion</i> de las escalas.
        </p>

        <div className="ImagenFigcap">
          <img src={dedos} alt="Identificación de las manos" />
          <figcaption>Identificación de los Dedos</figcaption>
        </div>
      </section>

      <h3>Cifrado Americano:</h3>
      <section>
        <p>
          El Cifrado Americano es la forma que adoptamos todos los musicos para
          poder globalizar la escritura musical. De esta forma es mas práctico
          divisar un cifrado de un acorde escrito en un pentagrama o una
          progresion armonica con sus extensiones.
          <br />
          <b>Quedando la nomenclatura de la siguiente manera:</b>
        </p>
        <div className="ImagenFigcap">
          <img
            src={cifradoamericano}
            alt="Cifrado Americano, nombres de las notas"
          />
          <figcaption>Cifrado Americano - Nomenclatura</figcaption>
        </div>
      </section>

      <h3>Alteraciones:</h3>
      <section>
        <p>
          Las alteraciones son símbolos musicales que usamos para aumentar o
          disminuir el valor de una nota.
        </p>
        <div className="Alteraciones">
          <div className="ContainerAlteraciones">
            <div className="ImagenFigcap">
              <img src={sostenido} alt="Sostenido Alteracion musical" />
              <figcaption>Sostenido</figcaption>
            </div>
            <div className="ImagenFigcap">
              <img src={bemol} alt="Bemol Alteracion musical" />
              <figcaption>Bemol</figcaption>
            </div>
            <div className="ImagenFigcap">
              <img src={becuadro} alt="Becuadro Alteracion musical" />
              <figcaption>Becuadro</figcaption>
            </div>
          </div>
          <figcaption>Alteracion mas Comunes</figcaption>
        </div>
        <p>
          En la imagen anterior mostrabamos las alteraciones mas usuadas.{" "}
          <i>Sostenido</i> Aumenta el valor de la nota en 1/2 Tono o mejor
          llamado 1 semitono. <i>Bemol</i> es lo contrario a Sostenido y
          disminuye 1 semitono el valor de la nota. <i>Becuadro</i> hace que no
          acepte ninguna alteracion y si previamente tenía asignada alguna la
          elimina quedando la nota natural asignada. Veamos algunos Ejemplos:
        </p>

        <div className="ImagenFigcap">
          <img src={alteraciones} alt="Alteracion en el teclado" />
          <figcaption>Alteraciones en el Piano</figcaption>
        </div>

        <p>
          Podemos observar que algunas de las notas pueden llevar el mismo
          sonido pero distinto nombre. Veamos el EJ:
          <span>C# (Do Sostenido) es igual a Db (Re Bemol)</span>
          Esta interpretacion es valida y ya veremos mas adelante porque se da
          esta situacion, que adelantando no es mas que una cuestion de
          nomenclatura musical. A este concepto se lo llama{" "}
          <i>Notas Enarmonicas</i>. Son notas con el mismo sonido pero con
          distina nomenclatura.
        </p>

        <div className="ImagenFigcap">
          <img src={enarmonicos} alt="Panel Notas Enarmonicas" />
          <figcaption>Panel de Notas Enarmonicas</figcaption>
        </div>
      </section>

      <h4>Practiquemos:</h4>
      <section>
        <div className="ImagenFigcap">
          <Ej_Notas_Alteracionescopy />
          <SelectorNotas />
          <figcaption>Ejercicio - Identifiación de Notas</figcaption>
        </div>
      </section>

      <h3>Figuras Musicales:</h3>
      <section>
        <p>
          Para que podamos identificar cual es la duración de las notas
          ejecutadas debemos conocer las figuras musicales y sus valores. El
          pentagrama se encuentra dividido por compases. Cada uno de estos
          compases se le asigna un valor de pulso que viene identidicado en el
          inicio del compas. Por ejemplo, si decimos que el compas esta en 4/4
          (cuatro, cuartos) quiere decir que habra 4 pulsos de negra por compas.
          Tambien hay que identificar el <i>"TEMPO"</i> al que vamos ejecutar
          dicha obra. En este caso el tempo nos mestra la "Velocidad" de
          ejecución. Asi mismo si decimos que el TEMPO es igual a valor de
          (Negra=60) quiere decir que cada negra va a durar un segundo de reloj.
          Y porque lo comparo con el reloj?. Porque un minuto son 60 pasos del
          segundero en el reloj. De esta manera tambien podriamos decir que
          cuando hayan transcurridos 60 pulsos de nuestra partitura, haria un
          minuto que estamos ejecutando nuestro instrumento. Esto no es tan
          estricto porque somos seres humanos y no ejecutamos tan perfectamente
          como el reloj pasa los segundos. Pero es un termino facil de comparar
          para su aprendizaje. Veamos ahora nuestras figuras y sus valores.
        </p>
        <div className="ImagenFigcap">
          <img
            src={valoresfigurasbinarias}
            alt="Valores de figuras Muscicales"
          />
          <figcaption>Valores de las Figuras Musicales binarias</figcaption>
        </div>
      </section>

      <h3>Parte de las Figuras Musicales:</h3>
      <section className="PartesFiguraMusical">
        <div className="ImagenFigcap">
          <img src={figurapartes} alt="Partes de una figura musical" />
          <figcaption>Partes de una figura musical</figcaption>
        </div>
        <ul>
          <li>1 - Corchete</li>
          <li>2 - Plica</li>
          <li>3 - Cabeza</li>
        </ul>
      </section>

      <h3>Puntillo:</h3>
      <section>
        <p>
          El <i>Puntillo</i> agrega a la nota la mitad de su valor. Ejemplo. Si
          tenemos una figura como la blanca y le adicionamos un puntillo, el
          valor de esta figura pasaria de tener 3 pulsos de duracion en vez de
          2.Se pueden poner mas de un puntillo agregando la mitad del valor que
          ya le precede. Blanca con dos puntillos 3 1/2 pulsos. Seria igual a 2
          negras y 1 corchea.
        </p>
        <div className="ImagenFigcap">
          <img src={figurapuntillo} alt="Figuras con puntillo" />
          <figcaption>Negra con puntillo. Valor de 1 pulso y medio</figcaption>
        </div>
        <div className="ImagenFigcap">
          <img
            src={valoresfigurasternarias}
            alt="Valores de figuras Muscicales Subdivision ternaria"
          />
          <figcaption>Valores de las Figuras Musicales ternarias</figcaption>
        </div>
      </section>

      <h4>Test Introdcuccion</h4>
      <section>Aqui Ejercicios</section>
    </Container>
  );
};
