import Nav from 'react-bootstrap/Nav';
import './Styles/StylesComponents.css';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/incio" className="flex-column custom-nav-vertical">
      <Nav.Link href="/calendario" className='titulos'>Calendario</Nav.Link>
      <Nav.Link href="/oferta" className='titulos'>Oferta</Nav.Link>
      <Nav.Link href="/matricula" className='titulos'>Matricula</Nav.Link>
      <Nav.Link eventKey="disabled" className='titulos' disabled>
        Constancia
      </Nav.Link>
      <Nav.Link href="/" className="additional-text" ><h1 >UdeA</h1></Nav.Link>
      
    </Nav>
  );
}

export default Sidebar;


