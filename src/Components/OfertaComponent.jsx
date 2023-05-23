import { useState, useEffect } from "react";
import './Styles/StylesComponents.css'


export function OfertaComponent()
{
    const [listadoCursos, setListadoCursos] = useState([]);
    useEffect(() => {
      obtenerCursos();
    }, []);
  
    const obtenerCursos = async () =>
    {
      const idEstudiante = "10231663981";
        const cursos = await fetch(
          `https://matriculaajustesapi-santiagobedoyao.b4a.run/cursos/estudiante/${idEstudiante}`
        ).then((response) => response.json());
  
        setListadoCursos(cursos);
     
    };
  
    const finalizarMatricula = async () => {
      const idEstudiante = "10231663981";
      try {
        const response = await fetch(
          `https://matriculaajustesapi-santiagobedoyao.b4a.run/finalizarMatricula/${idEstudiante}`,
          {
            method: "POST",
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    return (
        <div >
              <table id="tabla-calendario">
                <thead>
                  <tr>
                    <th>Codigo</th>
                    <th id="centrar">Nombre</th>
                    <th>Créditos</th>
                  </tr>
                </thead>
                <tbody>
                  {listadoCursos.map((curso, index) => (
                    <tr key={index}>
                      <td className="center">{curso.Codigo}</td>
                      <td className="center">{curso.Nombre}</td>
                      <td className="center centrar-en-tabla" >{curso.Creditos}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
      );
}
