
import Sidebar from '../Components/SidebarComponent';
import './Styles/StylesLayouts.css';
import { Outlet } from 'react-router-dom';

export function PrivadoLayout()

{
    return(
        <div className='contenedorLayoutVertical'>
            <Sidebar/>
            <main className='cuerpo1'>

            <Outlet/>
            </main>
            

        </div>
    )
}
