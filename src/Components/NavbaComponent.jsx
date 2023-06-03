import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from './images/Logosímbolo+Universidad+de+Antioquia+horizontal+®-01.png';
import './Styles/StylesComponents.css'

import {Link} from 'react-router-dom';


export function Navba() {
  return (
    <Navbar className="custom-navbar">

      <Container id='elementos-nav-horizontal'>

        <Navbar.Brand>
          <img
            src={LogoImage}
            width="250"
            height="180"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">

        <Link to="/ingresar" className="custom-button">Ingresar</Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

