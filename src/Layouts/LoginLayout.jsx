import './Styles/StylesLayouts.css'

import { Link, Outlet } from 'react-router-dom';
export function LoginLayout()
{
    return (
        <div className="contenedorLogin">
            <Link to='/'><h1 id='titulo-login' data-text="UdeA"></h1></Link>
            <main className="cuerpoLogin">
            <Outlet/>

            </main>
        </div>
    );
}




