export function PublicoLayout({children})
{
    return (
        <div >
            <span>Creamos un componente Navbar</span>
            <main >                
                {children}
            </main>
            <footer>Creamos un Componente Footer</footer>
        </div>
    );
}
