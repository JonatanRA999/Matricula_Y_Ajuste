
import Sidebar from '../Components/SidebarComponent';
import './Styles/StylesLayouts.css';

export function PrivadoLayout({children})
{
    return(
        <div className='contenedorLayoutVertical'>
            <Sidebar/>
            <main className='cuerpo'>
                {children}
            </main>
        </div>
    )
}
