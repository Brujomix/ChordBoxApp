import React from "react";
import jonico from "../Images/modos-griegos/jonico.png";
import dorico from "../Images/modos-griegos/dorico.png";
import doricoPenta from "../Images/modos-griegos/dorico-penta.png";
import frigio from "../Images/modos-griegos/frigio.png";
import frigioPenta from "../Images/modos-griegos/frigio-penta.png";
import lidio from "../Images/modos-griegos/lidio.png";
import lidioPenta from "../Images/modos-griegos/lidio-penta.png";
import mixolidio from "../Images/modos-griegos/mixolidio.png";
import mixolidioPenta from "../Images/modos-griegos/mixolidio-penta.png";
import eolico from "../Images/modos-griegos/eolico.png";
import eolicoPenta from "../Images/modos-griegos/eolico-penta.png";
import locrio from "../Images/modos-griegos/locrio.png";
import locrioPenta from "../Images/modos-griegos/locrio-penta.png";

export const ModosGriegos = () => {
  return (
    <div className="Modos_Griegos">
        <div>
          <h1>
            Modos<span>(Griegos)</span>
          </h1>
        </div>
        
        <div>
          <p>
            En la antigüedad la música estaba basada en 7 Modos que los
            llamaremos modos griegos. Iremos explicando uno a uno para poder
            comprender su estructura y su funcionalidad. Estos modos se
            construyen a partir de la estructura de tonos y semitonos que se
            encuentra en una octava y solo usando teclas blancas; es decir,
            sabemos que la escala mayor se construye a partir de una estructura
            de tonos y semitonos que vemos claramente en el teclado usando solo
            las teclas blancas desde la nota C4 hasta la nota C5 así quedando T
            - T S/T - T - T - T - S/T. Este modo es el modo mayor y corresponde
            al Modo JONICO de los modos griegos. Por otra parte si armaríamos
            una nueva estructura empezando desde la nota D4 hasta la nota D5,
            encontraríamos otra estructura. Así sucesivamente hasta llegar a la
            nota B4 tenemos todas las estructuras de los modos Griegos. Cada
            modo tiene un nombre específico y despliega nuevas características
            musicales por cada uno de ellos.
          </p>
        </div>

        <div>
          <h2>Modo Jonico</h2>
          <img src={jonico} alt="Estructura modo jonico" />
          <p>
            Podemos ver claramente la estructura de tonos y semitonos que parte
            de la nota C hasta la nota C de la siguiente octava, y ya o es tema
            nuevo esto para ti. Con la ayuda de esta estructura podemos
            desplegar las 12 tonalidades Mayores con sus escalas. Si
            conserváramos esta estructura y la trasladamos hacia la nota D,
            estaríamos en presencia del Modo JONICO de D, y así sucesivamente
            con las 12 que forman a la octava
          </p>
        </div>

        <div>
          <h2>Modo Dorico</h2>
          <img src={dorico} alt="Estructura modo dorico" />
          <p>
            Esta nueva estructura que se genera nos marca el nuevo modo que
            ahora lo llamaremos DORICO. Lo interesante de los modos griegos es
            que podemos llevar la estructura del modo DORICO y construirla a
            partir de cualquier otra nota obteniendo así por ejemplo si
            estaríamos en A tendríamos un modo A (LA) Dórico. O bien desde C y
            tendríamos C (DO) Dórico.
          </p>
          <img src={doricoPenta} alt="pentagrama modo dorico" />
        </div>

        <div>
          <h2>Modo frigio</h2>
          <img src={frigio} alt="Estructura modo frigio" />
          <p>
            Esta nueva estructura que se genera nos marca el nuevo modo que
            ahora lo llamaremos FRIGIO. El modo FRIGIO tiene la característica
            de ser una escala menor natural con el IIb.
          </p>
          <img src={frigioPenta} alt="pentagrama modo frigio" />
        </div>

        <div>
          <h2>Modo Lidio</h2>
          <img src={lidio} alt="Estructura modo lidio" />
          <p>
            Esta nueva estructura que se genera nos marca el nuevo modo que
            ahora lo llamaremos LIDIO. El modo FRIGIO tiene la característica de
            ser una escala Mayor con el IV #.
          </p>
          <img src={lidioPenta} alt="pentagrama modo lidio" />
        </div>

        <div>
          <h2>Modo Mixolidio</h2>
          <img src={mixolidio} alt="Estructura modo mixolidio" />
          <p>
            Esta nueva estructura que se genera nos marca el nuevo modo que
            ahora lo llamaremos MIXOLIDIO. El modo MIXOLIDIO tiene la
            característica de ser una escala Mayor con el VII b.
          </p>
          <img src={mixolidioPenta} alt="pentagrama modo mixolidio" />
        </div>

        <div>
          <h2>Modo Eolico</h2>
          <img src={eolico} alt="Estructura modo frigio" />
          <p>
            Esta nueva estructura que se genera nos marca el nuevo modo que
            ahora lo llamaremos EOLICO. El modo EOLICO tiene la característica
            de ser una escala menor natural. Particularmente esta escala
            corresponde al VI grado y se entiende como menor relativa.
          </p>
          <img src={eolicoPenta} alt="pentagrama modo eolico" />
        </div>

        <div>
          <h2>Modo Locrio</h2>
          <img src={locrio} alt="Estructura modo Locrio" />
          <p>
            Esta nueva estructura que se genera nos marca el nuevo modo que
            ahora lo llamaremos LOCRIO. El modo LOCRIO tiene la característica
            de ser una escala menor natural con IIb y Vb.
          </p>
          <img src={locrioPenta} alt="pentagrama modo Locrio" />
        </div>

        <div>
          <p>
            Terminaremos esta seccion con el aliento a desallorar todas las
            armonizaciones de los grados de las escalas que corresponde a cada
            uno de los modos. Y tambien con el consejo de mezclar y crear nuevas
            armonias para generar nuevas sensaciones msuicales.
          </p>
        </div>
      </div>
  );
};
