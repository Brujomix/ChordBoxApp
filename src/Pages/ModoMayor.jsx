import React from 'react'

export const ModoMayor = () => {
  return (
    <div className='Modo_Mayor'>
      <div>
            <h1>Modo<span>(Mayor)</span></h1>    
        </div>

        <div >
            <h2>Armonizando <i>Modo Mayor</i></h2>  
            <p>Si nos sentaríamos en el piano y tocaríamos a partir de C y con terceras superpuestas cada una de las notas blancas, nos encontraríamos armonizando la escala de C mayor. Si observamos detenidamente podemos deducir que se forman diferentes tipos de acordes a medida que avanzamos en la escala. 
            Cada uno de estos acordes formados cumplen una funcion especifica en la tonalidad. 
            Podemos observar en el cuadro siguente como quedan formados todos los grados en las siguientes tonalidades: 
                     
            </p>
            <div >
                <div >
                    <span>I</span>
                    
                    <span>CMaj7</span>
                </div>
                <div >
                    <span>II</span>
                    
                    <span>Dmin7</span>
                </div>
                <div >
                    <span>III</span>
                    
                    <span>Emin7</span>
                </div>
                <div >
                    <span>IV</span>
                    
                    <span>FMaj7</span>
                </div>
                <div >
                    <span>V</span>
                    
                    <span>G7</span>
                </div>
                <div >
                    <span>VI</span>
                    
                    <span>Amin7</span>
                </div>
                <div >
                    <span>VII</span>
                    
                    <span>Bmin7b5</span>
                </div>
                <figcaption>Armonizando Grados de la escala Mayor</figcaption>
            </div>
            
            <div >
                <div >
                    <span>Tonicas</span>
                    
                    <div>
                        <span>I</span>
                        <span>III</span>
                        <span>VI</span>     
                    </div>
                </div>
                <div >
                    <span>Sub Dominantes</span>
                    
                    <div>
                        <span>II</span>
                        <span>IV</span>    
                    </div>
                </div>
                <div >
                    <span>Dominantes</span>
                    
                    <div>
                        <span>V</span>
                        <span>VII</span>     
                    </div>
                </div>
                <figcaption>Funciones y Reemplazos Modo Mayor</figcaption>
            </div>
            
            <p> En la tabla anterior podemos observar las escalas de los sonidos naturales con su respectiva armonización de acordes.
                Es interesante resaltar que en las funciones de los acordes encontramos tres principales que son: 
                GRADO I (Tónica Mayor)  GRADO IV (Sub - Dominante Mayor)  GRADO V (Dominante por defecto).
                 Los grados restantes también cumplen su función como muestra la tabla y sirven de remplazo de las funciones principales.
                También podemos describirlos como: Reposo - Semi-tension - Tensión. De cualquiera de las dos formas es correcto.  
                 En los modos Mayores, al igual que en los modos menores, la armonía de las canciones giran alrededor de un centro tonal que lo definimos como TONICA. Las triadas de los grados que se forman a partir de la escala generan musicalmente tensiones a resolver en la TONICA o si fuese el caso en alguno de sus remplazos.
                 Existen progresiones de acordes básicas que encontramos en la música modal, una de ellas y la más común es:
                Tonica - Sub- Dominte - Dominte:  Ejemplo en C: C MAJ - F MAJ - G7.
                Hay infinidades de progresiones y de sustituciones de acordes sin contar las posibles modulaciones (Cambiar de centro tonal). El objetivo es ser creativos y crear nuestras porpias progresiones.
            </p>
        </div>

        <div >
            <h2>Metodo Caja Acordes</h2>
            <p>El metodo caja-acorde plantea una forma muy particular e interesante de construir acordes.  Nos enfocaremos en los acordes de grado I - Tonica.
            Lo primero es seleccionar una nota al azar de las 12 que existen en la musica tonal temperada. Esta nota va a formar parte de la contruccion de los acordes, posicionandose en diferentes grados de las tonalidades. Digamos que primero va a funcionar como Tonica, luego como tercera (en este caso Tercera-Mayor), luego como quinta y finalmente como septima de los acrodes Imaj7.
            
            </p>
            <p>Al final del ejercicio nos encontraremos con 4 acordes Imaj7 de cuatro tonalidades diferentes.
            Es recomendable tocar estos acordes manteniendo la nota raiz seleccionada como nota mas aguda y contruir los acordes en inversion hacia abajo. Se genera un recurso muy interesante que podemos aprovechar en nuestras composiciones.
            </p>
        
        </div>

        <div >           
            <h3>Acordes IMaj7</h3>
            <div >
                <button>
                    Seleccionar Tonalidad
                </button>
                <button>
                    Resetear Caja
                </button>
            </div>
            <div >

                <div >
                    <span>I</span>
                </div>
                <div >
                    <span>III</span>
                </div>
                <div >
                    <span>V</span>
                </div>
                <div >
                    <span>VII</span>
                </div>
                <div >
                    <span>Escuchar</span>
                </div>
                
                
                <div >
                    <span>Root</span>
                    <span>C</span>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <img src="../imgs/speaker-sound.png" alt="Parlante escuchar acorde"/>
                </div>
                
                <div >
                    <span>3era</span>
                    <span>C</span>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <img src="../imgs/speaker-sound.png" alt="Parlante escuchar acorde"/>
                </div>
            
            
                <div >
                    <span>5ta</span>
                    <span>C</span>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <img src="../imgs/speaker-sound.png" alt="Parlante escuchar acorde"/>
                </div>
                
                
                <div >
                    <span>7ma</span>
                    <span>C</span>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <input type="text" placeholder="nota"/>
                </div>
                <div >
                    <img src="../imgs/speaker-sound.png" alt="Parlante escuchar acorde"/>
                </div>           
            </div>
            <figcaption>Ejercicio Acordes Mayores</figcaption>
        </div>       
    </div>
  )
}
