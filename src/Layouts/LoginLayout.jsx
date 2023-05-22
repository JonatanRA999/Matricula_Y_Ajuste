import './Styles/StylesLayouts.css'

export function LoginLayout({children})
{
    return (
        <div className="contenedorLa">
            <h1 id='titulo-login' data-text="UdeA"></h1>
            <main className="cuerpo">
                {children}
            </main>
        </div>
    );
}

import './Styles/StylesLayouts.css';

