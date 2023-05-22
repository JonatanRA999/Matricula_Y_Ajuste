import { useState, useEffect } from "react";
import { PopupButton } from "./VentanaComponent"; 

export function VerCursos()
{
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(0);
    const [mostrarMensaje, setMostrarMensaje] = useState("");
    const [mostrarMensajeFinal, setMostrarMensajeFinal] = useState("");
    const [mostrarMensajeFinalizado, setMostrarMensajeFinalizado] = useState(false);
    const [listadoCursos, setListadoCursos] = useState([]);


    const cursosMatricula = async () => {
      const idEstudiante = "10231663981";
      const response = await fetch(
        `https://matriculaajustesapi-santiagobedoyao.b4a.run/iniciarMatricula/${idEstudiante}`,
        {
          method: "POST",
          /*headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idEstudiante }),*/
        }
      );
    
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
      const cursos = await fetch(
        `https://matriculaajustesapi-santiagobedoyao.b4a.run/cursos/estudiante/${idEstudiante}`
      ).then((response) => response.json());
    
      console.log(cursos);
      setListadoCursos(cursos);
    
      // Cambia el estado "mostrarBoton" a falso para ocultar el botón
      setMostrarBoton(false);
    
      // Establece el tiempo restante en 5 segundos (5000 milisegundos)
      setTiempoRestante(500);
    
      // Establece el estado "mostrarContenido" en verdadero para mostrar el contenido
      setMostrarContenido(true);
    };

    const finalizarMatricula = async () => {
      const idEstudiante = "10231663981";
      const response = await fetch(
        `https://matriculaajustesapi-santiagobedoyao.b4a.run/finalizarMatricula/${idEstudiante}`,
        {
          method: "POST",
        }
      );
    
      if (response.ok) {
        setMostrarMensajeFinal("La matricula ha sido exitosa");
        setMostrarMensajeFinalizado(true);
      }else{
        setMostrarMensajeFinal("Ha ocurrido un error al procesar la matricula");
      }
    
      setMostrarContenido(false);
      setMostrarBoton(false);

      const data = await response.json();
      console.log(data); // Imprime la respuesta de la API en la consola
    };
    

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
            setMostrarMensaje(true);
        }

        if (tiempoRestante === 0) {
          setMostrarMensaje("El tiempo para matricularse ha terminado");
        }
    }, [tiempoRestante]);

    

    

    return (
        <div className="container-cursos">
          { mostrarBoton ? 
            <button onClick={cursosMatricula} id="boton-matricula">Iniciar Matricula</button> : null 
          }
          { mostrarContenido ?
            <div>
              <p > <span id="tiempo">Tiempo restante: {formatTime(tiempoRestante)}</span></p>
              <table>
                <thead>
                  <tr>
                    <th>Codigo</th>
                    <th id="centrar">Nombre</th>
                    <th>Créditos</th>
                    <th>Correquisitos</th>
                    <th></th>

                  </tr>
                </thead>
                <tbody>
                  {listadoCursos.map((curso, index) => (
                    <tr key={index}>
                      <td className="center">{curso.Codigo}</td>
                      <td className="center">{curso.Nombre}</td>
                      <td className="center">{curso.Creditos}</td>
                      <td className="center">{curso.Correquisitos}</td>
                      <td className="center">
                        <PopupButton/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              { mostrarBoton==false ? 
            <button onClick={finalizarMatricula} id="boton-Enviar-matricula">Enviar</button>  : null
          }
              
            </div> : null
            
          }

          {mostrarMensajeFinalizado ? (
                <button id="mensaje-final">{mostrarMensajeFinal}</button>
              ) : null}
          
          {
            (tiempoRestante === 0 && mostrarBoton==false) ? <button id="mensaje-matricula">{mostrarMensaje}</button> : null
          }
          
         
        </div>
      );
}
