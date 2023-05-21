
import './Styles/StylesLayouts.css';

export function PrivadoLayout({children})
{
    return(
        <div className='contenedor-publico'>
            <span>Aqui va el sidebar</span>
            <main className='cuerpo-publico'>
                {children}
            </main>
        </div>
    )
}
