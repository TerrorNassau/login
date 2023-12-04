import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './login/login';
import Register from './register/register';

function Home() {
  return (
    <div>
      <h2>Tela Inicial</h2>
      {/* Adicione os links para as páginas de login e registro */}
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Cadastro</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
