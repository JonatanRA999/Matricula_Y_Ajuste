
import Sidebar from '../Components/SidebarComponent';
import './Styles/StylesLayouts.css';

export function PrivadoLayout({children})
{
    return(
        <div className='contenedorLayoutVertical'>
            <Sidebar/>
            <main className='cuerpo1'>
                {children}
            </main>
        </div>
    )
}
