import React from "react";
import { Table } from "react-bootstrap";
import playSound from "../../Images/speaker-sound.png";

export const TablaIntervalos = () => {
  
  const handleEventClick = ()=>{
    console.log("Click");
  }

  return (
    <div className="TablaIntervalos">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Intervalo</th>
            <th>Abreviatura</th>
            <th>Dist. Semitonos</th>
            <th>Dist. Tonos</th>
            <th>Escucha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Segunda menor</td>
            <td> 2da </td>
            <td>1 </td>
            <td>Semitono </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Segunda Mayor</td>
            <td>2da</td>
            <td>2 </td>
            <td>Tono </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Tercera menor</td>
            <td> 3ra </td>
            <td>3</td>
            <td>Tono 1/2 </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Tercera Mayor</td>
            <td> 3ra </td>
            <td> 4 </td>
            <td> 2 Tonos </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Cuarta Justa</td>
            <td> 4ta </td>
            <td>5</td>
            <td> 2 Tonos 1/2 </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td> Tritono </td>
            <td> #4ta o b5ta</td>
            <td> 6 </td>
            <td> 3 Tonos </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Quinta Justa</td>
            <td> 5ta </td>
            <td>7</td>
            <td> 3 Tonos 1/2 </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Sexta menor</td>
            <td> 6ta </td>
            <td>8</td>
            <td> 4 Tonos </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Sexta Mayor</td>
            <td> 6ta </td>
            <td>9</td>
            <td>4 Tonos 1/2 </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Septima menor</td>
            <td> 7ma </td>
            <td> 10 </td>
            <td> 5 Tonos </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Septima Mayor</td>
            <td> 7ma </td>
            <td> 11 </td>
            <td> 5 Tonos 1/2 </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Octava</td>
            <td> 8va </td>
            <td> 12 </td>
            <td> 6 Tonos </td>
            <td>
              <button onClick={handleEventClick}>
                <img src={playSound} alt="Speaker Sound" />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      <figcaption>Tabla Nombres de Intervalos</figcaption>
    </div>
  );
};
