import { useState, useEffect } from "react";
import { PopupButton } from "./VentanaComponent";

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

    

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
        <div className="container">
          { mostrarBoton ? 
            <button onClick={cursosMatricula} id="boton-matricula">Iniciar Matricula</button> : null 
          }
          { mostrarContenido ?
            <div>
              <p > <span id="tiempo">Tiempo restante: {formatTime(tiempoRestante)}</span></p>
              <table>
                <thead>
                  <tr>
                    <th>Curso</th>
                    <th>Créditos</th>
                    <th>Codigo</th>
                    <th>Elegir</th>
                  </tr>
                </thead>
                <tbody>
                  {listadoCursos.map((curso, index) => (
                    <tr key={index}>
                      <td className="center">{curso.Nombre}</td>
                      <td className="center">{curso.Creditos}</td>
                      <td className="center">{curso.Codigo}</td>
                      <td className="center">
                        <PopupButton/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div> : null
          }
        </div>
      );
}