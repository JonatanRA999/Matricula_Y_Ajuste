import './Styles/StylesLayouts.css';

export function PublicoLayout({children})
{
    return (
        <div className="contenedor-publico">
            <span>Creamos un componente Navbar</span>
            <main className="cuerpo-publico">                
                {children}
            </main>
            <footer>Creamos un Componente Footer</footer>
        </div>
    );
}
