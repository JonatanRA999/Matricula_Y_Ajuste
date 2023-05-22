
import './Styles/StylesLayouts.css';
import { Navba } from '../Components/NavbaComponent';

export function PublicoLayout({children})
{
    return (
        <div className="contenedorLayoutHorizontal">
            <Navba/>
            <main className="cuerpo">                
                {children}
            </main>
        </div>
    );
}
