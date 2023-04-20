import { useState, useEffect } from "react";

export function VerCursos()
{
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(0);

    const [listadoCursos, setListadoCursos] = useState([]);

   
    
  
 




    const cursosMatricula = async () => 
    {
        const cursos = await fetch("https://matriculaajustesapi-santiagobedoyao.b4a.run/cursos/estudiante/1006157087")
            .then((response) => response.json())
            .then((data) => data);

        console.log(cursos);
        setListadoCursos(cursos);

            // Cambia el estado "mostrarBoton" a falso para ocultar el botón
        setMostrarBoton(false);

        // Establece el tiempo restante en 5 segundos (5000 milisegundos)
        setTiempoRestante(900);

        // Establece el estado "mostrarContenido" en verdadero para mostrar el contenido
        setMostrarContenido(true);
    }

    useEffect(() => {
        // Si el contenido se está mostrando y el tiempo restante es mayor que cero,
        // establece un temporizador para actualizar el tiempo restante cada segundo
        if (mostrarContenido && tiempoRestante > 0) {
          const temporizador = setTimeout(() => {
            setTiempoRestante(tiempoRestante - 1);
          }, 1000);
    
          // Devuelve una función de limpieza para cancelar el temporizador si el componente se desmonta
          return () => clearTimeout(temporizador);
        }
      }, [mostrarContenido, tiempoRestante]);
    
      useEffect(() => {
        // Si el tiempo restante llega a cero, oculta el contenido
        if (tiempoRestante === 0) {
          setMostrarContenido(false);
        }
      }, [tiempoRestante]);

    return (
        <div className="App">
          { mostrarBoton ? 
            <button onClick={cursosMatricula}>Iniciar</button> : null 
          }
          { mostrarContenido ?
            <div>
              <p>Tiempo restante: {tiempoRestante}</p>
              <table>
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listadoCursos.map((curso, index) => (
                    <tr key={index}>
                      <td>{curso.Nombre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> : null
          }
        </div>
      );
}
