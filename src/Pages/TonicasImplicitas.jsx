import React from "react";
import maj7_9 from "../Images/tonicas-implicitas/maj7-9.png";
import cmaj from "../Images/tonicas-implicitas/tonicas-implicitas-Cmaj.png";
import dmaj from "../Images/tonicas-implicitas/tonicas-implicitas-Dmaj.png";
import cmin from "../Images/tonicas-implicitas/tonicas-implicitas-Cmin.png";
import dmin from "../Images/tonicas-implicitas/tonicas-implicitas-Dmin.png";
import { Container } from "react-bootstrap";

export const TonicasImplicitas = () => {
  return (
    <Container className="Tonicas_Implicitas">
      <div>
        <h1>
          Tonicas <span>(Implicitas)</span>
        </h1>
      </div>

      <div>
        <p>
          Hasta aquí hemos visto como formar acordes Mayores y menores. A demás
          vimos la característica de las 7ma en cada uno de ellos. Vamos a
          conocer un tema muy amplio que trata de desplegar a los acordes en su
          máxima extensión de colores musicales (Notas adicionales a las
          cuatriadas). Para esto veremos la técnica de las tónicas implícitas
          Mayores y menores. Esta técnica consiste en superponer acordes unos
          con otros de manera de generar nuevos colores. Si bien esta tecnica
          esta mas orientada visulamente para los pianistas, no deja de ser una
          buena forma de encotrar nuevas sonoridades en los acordes. Aprender
          cada una de las tensiones y colores de los acordes se hace complicado
          y muy tedioso ejecutar un acorde maj9-#11 por ejemplo. Cuando
          estudiamos el modo Mayor y menor, extendimos todas las escalas
          armonizando cada uno de los grados con acordes de 7ma (cuatriadas).
          Para este caso de <i>"Tonicas Implicitas"</i> vamos a usar
          principalmente la puras triadas Mayores, menores y disminuidas.
          Digamos que quisiéramos de repente ejecutar un acorde Mayor que con
          tenga la 9 y la séptima. Es complicado y tal vez lleve a la confusión
          pensar en los colores por separado, con esta técnica es tan simple
          como colocar la triada I con la triada V. EJ: Triada I Mayor (C-E-G) y
          por sobre esta triada, Triada Mayor V (G-B-D). Quedando como Resultado
          CMaj7-9.
        </p>
        <div>
          <img
            src={maj7_9}
            alt="Cifrado Acorde Mayor con septima y novena"
          />
        </div>
        <p>
          Este método es equivalente a todas las tonalidades Mayores y menores.
          EJEMPLO en tonalidad Mayor:
        </p>

        <div>
          <ul>
            <li>La tónica asumida I es la fundamental</li>
            <li>
              La tónica asumida III es la del tercer grado Colores: (7ma menor).
            </li>
            <li>
              La tónica asumida V es la del quinto grado Colores: (7ma menor y
              9na).
            </li>
            <li>
              La tónica asumida VII es la del séptimo grado Colores: (7ma menor
              - 9na - 11va).
            </li>
          </ul>
        </div>
        <p>
          Veamos en el pentagrama unos Ejemplos en tonalidades Mayores y menores
          para aclarar y ver mas en detalle las extensiones de los acordes.
        </p>
        <div>
          <img
            src={cmaj}
            alt="Tonicas implicitas Modo Mayor de C"
          />
          <img
            src={dmaj}
            alt="Tonicas implicitas Modo Mayor de D"
          />
          <img
            src={cmin}
            alt="Tonicas implicitas Modo menor de C"
          />
          <img
            src={dmin}
            alt="Tonicas implicitas Modo menor de D"
          />
        </div>
      </div>
    </Container>
  );
};
