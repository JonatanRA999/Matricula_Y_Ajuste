import Login from "../Components/LoginComponent";

export function Ingresar()
{
    return(
        <div className="iniciar-sesion-container">
            <h1 className='titulo-inicio'>Iniciar Sesión</h1>
            <Login></Login>
        </div>
    );
}