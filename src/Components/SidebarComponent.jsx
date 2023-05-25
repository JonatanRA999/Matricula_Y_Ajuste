import Nav from 'react-bootstrap/Nav';
import './Styles/StylesComponents.css';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/incio" className="flex-column custom-nav-vertical">
      <Link to="/calendario" className='titulos'>Calendario</Link>
      <Link to="/oferta" className='titulos'>Oferta</Link>
      <Link to="/matricula" className='titulos'>Matricula</Link>
      <Link to="/constancia" className='titulos' >Constancia</Link>
      <Link to="/" className="additional-text" ><h1 >UdeA</h1></Link>
    </Nav>
  );
}

export default Sidebar;


