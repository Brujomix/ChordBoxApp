import React from "react";
import { Container } from "react-bootstrap";

export const Modomenor = () => {
  return (
    <Container className="Modo_menor">
      <div>
        <h1>
          Modo<span>(menor)</span>
        </h1>
      </div>

      <div>
        <h2>
          Armonizando <i>modo menor</i>
        </h2>
        <p>
          El círculo de Cuartas y Quintas no ha determinado que a partir del VIº
          de toda escala Mayor se encuentra el relativo menor, que no es más que
          continuar la escala mayor pero a partir del VIº. De ahí nace la
          estructura de tonos y semitonos correspondiente a cualquier escala
          menor natural.
        </p>
        <div>
          <img
            src="../imgs/modo_menor/menor-natural.png"
            alt="Estructura y origen de la escala menor natural"
          />
        </div>
        <p>
          {" "}
          En la imagen vemos claramente la secuencia de tonos y semitonos que
          conforman a la estructura de las escalas menores naturales. T - S/T -
          T - T - T - S/T - T - T De más esta decir que si trasladamos esta
          estructura a partir de cualquier otra nota o tonalidad, estaríamos
          desarrollando su escala menor natural. Ej. escala menor de DD - E - F
          - G - A - Bb - C - D
        </p>

        <p>
          NOTA: Toda escala mayor tiene un relativo menor, que es su versión
          natural va a contener las mismas alteraciones que contenga la escala
          mayor. Una forma más fácil de encontrar el relativo menor es descender
          una 3ra menor (1 ½ T) desde la tónica mayor. Si nos concentráramos en
          solo la escala natural podríamos definir sus grados y sus acordes de
          cada grado.
        </p>
      </div>
      <div>
        <h3>Amonizando Escala menor Natural</h3>
        <div>
          <div>
            <span>I</span>
            <span>Amin7</span>
          </div>
          <div>
            <span>II</span>
            <span>Bm7b5</span>
          </div>
          <div>
            <span>III</span>
            <span>CMaj7</span>
          </div>
          <div>
            <span>IV</span>
            <span>Dmin7</span>
          </div>
          <div>
            <span>V</span>
            <span>Emin7</span>
          </div>
          <div>
            <span>VI</span>
            <span>FMaj7</span>
          </div>
          <div>
            <span>VII</span>
            <span>G7</span>
          </div>
          <figcaption>Armonizando Grados de la escala menor Natural</figcaption>
        </div>
      </div>

      <div>
        <h3>Amonizando Escala menor Armonica</h3>
        <p>
          {" "}
          En la música existen dos escalas menores más que son: Escala menor
          Armónica: T - S/T - T - T - S/T - T Y MEDIO - S/T (Escala menor
          árabe). Notar que el tetracorde inferior de las tres escalas es el
          mismo. Solo se modifica el segundo tetracorde y que en el caso de la
          escala menor melódica, el tetracorde superior es idéntico al de la
          escala Mayor de dicha tonalidad. También es posible armonizar ambas
          escalas menores quedando de la siguiente forma:
        </p>
        <div>
          <div>
            <span>I</span>
            <span>Am7 aug</span>
          </div>
          <div>
            <span>II</span>
            <span>Bmin7b5</span>
          </div>
          <div>
            <span>III</span>
            <span>CMaj7 aug</span>
          </div>
          <div>
            <span>IV</span>
            <span>Dmin7</span>
          </div>
          <div>
            <span>V</span>
            <span>E7</span>
          </div>
          <div>
            <span>VI</span>
            <span>FMaj7</span>
          </div>
          <div>
            <span>VII</span>
            <span>G# dim7</span>
          </div>
          <figcaption>
            Armonizando Grados de la escala menor Armonica
          </figcaption>
        </div>
      </div>

      <div>
        <h3>Amonizando Escala menor Melodica</h3>
        <span>Escala menor Melódica: T - S/T - T - T - T - T - S/T </span>
        <div>
          <div>
            <span>I</span>
            <span>Am b7</span>
          </div>
          <div>
            <span>II</span>
            <span>Bmin7</span>
          </div>
          <div>
            <span>III</span>
            <span>CMaj7 aug</span>
          </div>
          <div>
            <span>IV</span>
            <span>D7</span>
          </div>
          <div>
            <span>V</span>
            <span>E7</span>
          </div>
          <div>
            <span>VI</span>
            <span>F#m7b5</span>
          </div>
          <div>
            <span>VII</span>
            <span>G#m7b5</span>
          </div>
          <figcaption>
            Armonizando Grados de la escala menor Melodica
          </figcaption>
        </div>
      </div>

      <div>
        <div>
          <span>Tonicas</span>
          <div>
            <span>Im7 o Im7aug</span>
            <span>IIIMaj7</span>
          </div>
        </div>
        <div>
          <span>Sub Dominantes</span>
          <div>
            <span>IV o IV7</span>
            <span>VI o VIm7b5</span>
            <span>II</span>
          </div>
        </div>
        <div>
          <span>Dominantes</span>
          <div>
            <span>V7 o Vm7</span>
            <span>III</span>
            <span>VII7 o VIIm75b</span>
          </div>
        </div>
        <figcaption>Funciones y Reemplazos Modo menor</figcaption>
      </div>

      <div>
        <h3>Acordes Imin7</h3>
        <div>
          <button>Seleccionar Tonalidad</button>
          <button>Resetear Caja</button>
        </div>
        <div>
          <div>
            <span>I</span>
          </div>
          <div>
            <span>III</span>
          </div>
          <div>
            <span>V</span>
          </div>
          <div>
            <span>VII</span>
          </div>
          <div>
            <span>Escuchar</span>
          </div>

          <div>
            <span>Root</span>
            <span>C</span>
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <img
              src="../imgs/speaker-sound.png"
              alt="Parlante escuchar acorde"
            />
          </div>

          <div>
            <span>3era</span>
            <span>C</span>
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <img
              src="../imgs/speaker-sound.png"
              alt="Parlante escuchar acorde"
            />
          </div>

          <div>
            <span>5ta</span>
            <span>C</span>
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <img
              src="../imgs/speaker-sound.png"
              alt="Parlante escuchar acorde"
            />
          </div>

          <div>
            <span>7ma</span>
            <span>C</span>
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <input type="text" placeholder="nota" />
          </div>
          <div>
            <img
              src="../imgs/speaker-sound.png"
              alt="Parlante escuchar acorde"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
