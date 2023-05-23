import './Styles/StylesLayouts.css'

import { Link, Outlet } from 'react-router-dom';
export function LoginLayout()
{
    return (
        <div className="contenedorLa">
            <Link to='/'><h1 id='titulo-login' data-text="UdeA"></h1></Link>
            <main className="cuerpo">
            <Outlet/>

            </main>
        </div>
    );
}




