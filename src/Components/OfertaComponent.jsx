import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import "./Styles/StylesComponents.css";
import { idUsuario } from "../Context/idUsuario";


export function OfertaComponent() {
  const { id } = idUsuario();
  const [listadoCursos, setListadoCursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div>
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
                  <td className="center centrar-en-tabla">{curso.Creditos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="info-card">No tienes Oferta de cursos</div>
        )}
      </AnimatePresence>
    </div>
  );
}


