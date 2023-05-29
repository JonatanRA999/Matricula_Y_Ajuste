import { IngresarComponent } from "../Components/IngresarComponent";
import { Link } from "react-router-dom";


export function Ingresar()
{
    return(

        <div className="iniciar-sesion-container">
            <Link to='/'><h1 id='titulo-login' data-text="UdeA"></h1></Link>
            <h1 id='titulo-inicio-titulo'>Ingresar</h1>
            <IngresarComponent/>
        </div>
    );
}