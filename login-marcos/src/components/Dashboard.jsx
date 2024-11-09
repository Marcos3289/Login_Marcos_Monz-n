// src/components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bienvenido al Dashboard de Programación</h1>
        <p>Encuentra recursos y guías sobre programación con React y Vite.</p>
      </div>

      <div className="dashboard-content">
        <div className="info-card">
          <h2>Conceptos Básicos</h2>
          <p>Aprende los conceptos esenciales de React y cómo usarlos en tu proyecto.</p>
          <a href="#">Ver más</a>
        </div>
        <div className="info-card">
          <h2>Componentes Avanzados</h2>
          <p>Explora temas avanzados de React para crear aplicaciones complejas y eficientes.</p>
          <a href="#">Ver más</a>
        </div>
        <div className="info-card">
          <h2>Optimización con Vite</h2>
          <p>Descubre cómo Vite mejora el desarrollo de aplicaciones modernas y rápidas.</p>
          <a href="#">Ver más</a>
        </div>
      </div>

      <button className="logout-button" onClick={onLogout}>Cerrar Sesión</button>

      <div className="dashboard-footer">
        <p>&copy; 2024 - Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Dashboard;
