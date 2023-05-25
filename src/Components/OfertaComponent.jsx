import { useState, useEffect } from "react";
import './Styles/StylesComponents.css'
import { idUsuario } from '../Context/idUsuario';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function OfertaComponent()
{
    const {id} = idUsuario();
    const [listadoCursos, setListadoCursos] = useState([]);
    useEffect(() => {
      obtenerCursos();
    }, []);
  
    const obtenerCursos = async () =>
    {

      const idEstudiante = id;
      console.log("ide del : ",idEstudiante)
        const cursos = await fetch(
          `https://matriculaajustesapi-santiagobedoyao.b4a.run/cursos/estudiante/${idEstudiante}`
        ).then((response) => response.json());
  
        setListadoCursos(cursos);
        
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
