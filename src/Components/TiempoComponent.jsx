import { useState } from "react";

export function Tiempo(props)
{

    const [tiempoRestante, setTiempoRestante] = useState(0);

    setTiempoRestante(props.tiempo)

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

    return(

        <div>
            <p > <span id="tiempo">Tiempo restante: {formatTime(tiempoRestante)}</span></p>
        </div>
    );
}