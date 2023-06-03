
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Styles/StylesComponents.css";
import { idUsuario } from "../Context/idUsuario";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";


export function ConstanciaComponent() {
  const { id } = idUsuario();
  const [listadoCursos, setListadoCursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tableRef = useRef();
  const [estudiante, setEstudiante] = useState(null);


  useEffect(() => {
    obtenerCursos();
  }, []);

  const obtenerCursos = async () => {
    const idEstudiante = id;
    console.log("id del estudiante:", idEstudiante);

    const response = await fetch(
      `https://matriculaajustesapi-santiagobedoyao.b4a.run/consultarMatricula/${idEstudiante}`
    );
    const data = await response.json();

    if (data.Registros) {
      setListadoCursos(data.Registros);
    }
    setIsLoading(false);
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Tabla de cursos",
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
    `,
    printOptions: {
      dpi: 300,
    },
  });

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
    }
  };

  return (
    <div>
      <div className="info-card-constancia">
        <div className="titulo-usuario">Nombre: {estudiante && estudiante.Nombres+" "+estudiante.Apellidos}</div>
        <div className="titulo-usuario">Créditos Cursados: {estudiante && estudiante.CreditosCursados}</div>
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

          <>
            <div ref={tableRef}>
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
            <button onClick={handlePrint} id="boton-imprimir">Imprimir</button>
          </>
        ) :null}

      </AnimatePresence>
    </div>
  );
}
