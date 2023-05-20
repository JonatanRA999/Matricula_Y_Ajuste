import { Link } from "react-router-dom";
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
//import 'bootstrap/dist/css/bootstrap.min.css';
export function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
  
    </div>
  );
}
