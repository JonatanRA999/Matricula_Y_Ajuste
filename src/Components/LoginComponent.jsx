import React, { useState } from 'react';

function Login() {
  const [userId, setUserId] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const numericInput = input.replace(/\D/, ''); // Eliminar cualquier carácter que no sea un número
    const truncatedInput = numericInput.slice(0, 10); // Limitar la entrada a 10 dígitos
    setUserId(truncatedInput);
    setIsButtonDisabled(truncatedInput.length === 0);
  };

  return (
      <form className="login-form">
      <h1 id="usuario-id">ID de usuario</h1>
      <div className="textb">
        <input type="text" value={userId} onChange={handleInputChange} pattern="\d*" maxLength="10" required />
        <div className="placeholder">ID usuario</div>
      </div>
      <button className="btn fas fa-arrow-right" disabled={isButtonDisabled}></button>
    </form>
  );
}

export default Login;
