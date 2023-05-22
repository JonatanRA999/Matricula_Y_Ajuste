import Nav from 'react-bootstrap/Nav';
import './Styles/StylesComponents.css';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/incio" className="flex-column custom-nav-vertical">
      <Nav.Link href="/calendario" className='titulos'>Calendario</Nav.Link>
      <Nav.Link href="/oferta" className='titulos'>Oferta</Nav.Link>
      <Nav.Link href="/matricula" className='titulos'>Matricula</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Constancia
      </Nav.Link>
      <h1 className="additional-text">UdeA</h1>
    </Nav>
  );
}

export default Sidebar;


