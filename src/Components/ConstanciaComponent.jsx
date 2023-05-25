import { useState, useEffect } from "react";
import './Styles/StylesComponents.css'
import { idUsuario } from '../Context/idUsuario';

export function ConstanciaComponent() {
  const { id } = idUsuario();
  const [listadoCursos, setListadoCursos] = useState([]);

  useEffect(() => {
    obtenerCursos();
  }, []);

  const obtenerCursos = async () => {
    const idEstudiante = id;
    console.log("id del estudiante:", idEstudiante);

    const response = await fetch(`https://matriculaajustesapi-santiagobedoyao.b4a.run/consultarMatricula/${idEstudiante}`);
    const data = await response.json();

    if (data.Registros) {
      setListadoCursos(data.Registros);
    }
  };

  return (
    <div>
      <table id="tabla-calendario">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Nombre</th>
            <th id="centrar">Horario</th>
            <th>Creditos</th>
          </tr>
        </thead>
        <tbody>
          {listadoCursos.map((curso, index) => (
            <tr key={index}>
              <td className="center">{curso.EstadoRegistro}</td>
              <td className="center">{curso.NombreCurso}</td>
              <td className="center">{curso.HorarioCurso}</td>
              <td className="center centrar-en-tabla">{curso.CreditosCurso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
