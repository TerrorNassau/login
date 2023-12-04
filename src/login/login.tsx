import React from 'react';
import './login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" className="input-field" />

        <label>Senha:</label>
        <input type="password" className="input-field" />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
