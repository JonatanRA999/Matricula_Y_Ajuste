import './Styles/StylesLayouts.css';

export function PrivadoLayout({children})
{
    return(
        <div className='contenedor-publico'>
            <span>Pagina privada</span>
            <main className='cuerpo-publico'>
                {children}
            </main>
        </div>
    )
}
