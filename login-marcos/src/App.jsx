// src/App.jsx
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (username, password) => {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
      setIsAuthenticated(true);
    } else {
      alert('Credenciales incorrectas o usuario no registrado');
    }
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  const handleRegistrationComplete = (status) => {
    if (status) {
      setIsRegistering(false);
      alert('Registro exitoso. Por favor, inicie sesión.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : isRegistering ? (
        <Register onRegister={handleRegistrationComplete} />
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <button onClick={handleRegister}>Registrarse</button>
        </div>
      )}
    </div>
  );
}

export default App;
