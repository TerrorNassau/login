import React from 'react';
import './register.css';

function Register() {
  return (
    <div className="register">
      <div className="register-container">
        <h2>Cadastro</h2>
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="Nome" name="Nome" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="Email" name="Email" />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="Senha" name="Senha" />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
