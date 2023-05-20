import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendario } from '../Pages/CalendarioPage';

function Login() {
  const [userId, setUserId] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    setUserId(event.target.value);
    setIsButtonDisabled(event.target.value === '');
  };

  return (
    <form className="login-form">
      <h1>ID de usuario</h1>
      <div className="textb">
        <input type="text" value={userId} onChange={handleInputChange} required />
        <div className="placeholder">ID usuario</div>
      </div>
      <button className="btn fas fa-arrow-right" disabled={isButtonDisabled}></button>
      <Link to={Calendario}>ir vamos</Link>
    </form>
  );
}

export default Login;

