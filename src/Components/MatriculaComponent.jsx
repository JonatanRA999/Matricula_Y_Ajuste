import { useState, useEffect } from "react";
import { Ventana } from "./VentanaComponent"; 
import { idUsuario } from '../Context/idUsuario';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConstanciaComponent } from "./ConstanciaComponent";

export function MatriculaComponent()
{
    const notify = () => toast("Wow so easy!");

    const {id} = idUsuario();
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(0);
    const [mostrarMensaje, setMostrarMensaje] = useState("");
    const [mostrarMensajeFinalizado, setMostrarMensajeFinalizado] = useState(false);
    const [listadoCursos, setListadoCursos] = useState([]);


    const cursosMatricula = async () => {
      const idEstudiante = id;
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
      setTiempoRestante(900);
    
      // Establece el estado "mostrarContenido" en verdadero para mostrar el contenido
      setMostrarContenido(true);
    };

    const finalizarMatricula = async () => {
      const idEstudiante = id;
      try {
        const response = await fetch(`https://matriculaajustesapi-santiagobedoyao.b4a.run/finalizarMatricula/${idEstudiante}`, {
          method: 'POST',
        });
    
        if (response.ok) {
          setMostrarContenido(false);
          setMostrarBoton(false);
          setMostrarMensajeFinalizado(true);
    
          const data = await response.json();
          console.log(data); // Imprime la respuesta de la API en la consola
          toast.success(data.message);
        } else {
          throw new Error('Error al finalizar la matrícula');
        }
      } catch (error) 
      {
        toast.error('Ocurrió un error al finalizar la matrícula');
      }
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
            <button onClick={cursosMatricula} id="boton-matricula">Iniciar Matrícula</button> : null 
          }
          { mostrarContenido ?
            <div>
              <p > <span id="tiempo">Tiempo restante: {formatTime(tiempoRestante)}</span></p>
              <table>
                <thead>
                  <tr>
                    <th>Código</th>
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
                      <td className="center centrar-en-tabla">{curso.Creditos}</td>
                      <td className="center">{curso.Correquisitos}</td>
                      <td className="center">
                        <Ventana codigoCurso={curso.Codigo} />
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
                <ToastContainer position="top-center"/>
              ) : null}
          {mostrarMensajeFinalizado ? (
                <ConstanciaComponent/>
              ) : null}
          
          
          {
            (tiempoRestante === 0 && mostrarBoton==false) ? <button id="mensaje-matricula">{mostrarMensaje}</button> : null
          }
          
         
        </div>
      );
}
