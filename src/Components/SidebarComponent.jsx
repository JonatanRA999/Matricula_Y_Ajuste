import Nav from 'react-bootstrap/Nav';
import './Styles/StylesComponents.css';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column custom-nav">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default Sidebar;


