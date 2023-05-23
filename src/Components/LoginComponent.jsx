import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const numericInput = input.replace(/\D/, ''); // Eliminar cualquier carácter que no sea un número
    const truncatedInput = numericInput.slice(0, 10); // Limitar la entrada a 10 dígitos
    setUserId(truncatedInput);
    setIsButtonDisabled(truncatedInput.length === 0);
  };

  const handleFormSubmit = () => {
    
    // Redireccionar a la página específica

    navigate('/inicio');

  };

  return (
    <div className='bodyb'>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h1 id="usuario-id">ID de usuario</h1>
        <div className="textb">
          <input type="text" value={userId} onChange={handleInputChange} pattern="\d*" maxLength="10" required />
        </div>
        <button className="btn fas fa-arrow-right" disabled={isButtonDisabled} onClick={handleFormSubmit}></button>
      </form>
    </div>
  );
}

export default Login;
