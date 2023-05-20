import './Styles/StylesLayouts.css'

export function LoginLayout({children})
{
    return (
        <div className="contenedor-publico">
            <h1 id='titulo-login' data-text="UdeA"></h1>
            <main className="cuerpo-publico">
                {children}
            </main>
        </div>
    );
}

import './Styles/StylesLayouts.css';

