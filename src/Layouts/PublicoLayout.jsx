
import './Styles/StylesLayouts.css';
import { Navba } from '../Components/NavbaComponent';
import { Outlet } from 'react-router-dom';

export function PublicoLayout()
{
    return (
        <div className="contenedorLayoutHorizontal">
            <Navba/>
            <main className="cuerpo">   
             <Outlet/>
            </main>
        </div>
    );
}
