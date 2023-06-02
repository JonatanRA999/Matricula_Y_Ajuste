import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Styles/StylesComponents.css";
import { idUsuario } from "../Context/idUsuario";


export function OfertaComponent() {
  const { id } = idUsuario();
  const [listadoCursos, setListadoCursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [estudiante, setEstudiante] = useState(null);


  useEffect(() => {
    obtenerCursos();
  }, []);

  const obtenerCursos = async () => {
    const idEstudiante = id;
    console.log("ID del estudiante:", idEstudiante);

    try {
      const cursos = await fetch(
        `https://matriculaajustesapi-santiagobedoyao.b4a.run/cursos/estudiante/${idEstudiante}`
        
      ).then((response) => response.json());

      setListadoCursos(cursos);
    } catch (error) {
      console.log("Error al obtener los cursos:", error);
      toast.error("No es posible cargar la página. Por favor, inténtalo nuevamente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    obtenerEstudiante();
  }, []);
  
  const obtenerEstudiante = async () => {
    try {
      const response = await fetch(`https://matriculaajustesapi-santiagobedoyao.b4a.run/estudiantes/${id}`);
      if (response.ok) {
        const data = await response.json();
        setEstudiante(data);
      } else {
        throw new Error("Error al obtener el estudiante");
      }
    } catch (error) {
      console.log("Error al obtener el estudiante:", error);
      toast.error("No es posible cargar la información del estudiante. Por favor, inténtalo nuevamente más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  
  return (
    <div>
      <div className="info-card-oferta">
        <div className="titulo-usuario">Nombre: {estudiante && estudiante.Nombres+" "+estudiante.Apellidos}</div>
        <div className="titulo-usuario">Identificación: {estudiante && estudiante.NumeroIdentificacion}</div>
        <div className="titulo-usuario">Semestre: {estudiante && estudiante.SemestreAcademico}</div>
        <div className="titulo-usuario">Tanda: {estudiante && estudiante.tandaMatricula}</div>
      </div>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loading-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="loading-circle" />
          </motion.div>
        ) : listadoCursos.length > 0 ? (
          <table id="tabla-calendario">
            <thead>
              <tr>
                <th>Código</th>
                <th id="centrar">Nombre</th>
                <th>Créditos</th>
              </tr>
            </thead>
            <tbody>
              {listadoCursos.map((curso, index) => (
                <tr key={index}>
                  <td className="center">{curso.Codigo}</td>
                  <td className="center">{curso.Nombre}</td>
                  <td className="center centrar-en-tabla">{curso.Creditos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

