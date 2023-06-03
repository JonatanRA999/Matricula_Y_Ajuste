import './Styles/StylesLayouts.css'


import { Outlet } from 'react-router-dom';
export function LoginLayout()
{
    return (
        <div className="contenedorLogin">
            
            <main className="cuerpoLogin">

            <Outlet/>

            </main>
        </div>
    );
}




