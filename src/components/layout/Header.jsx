import React from 'react';

// El componente recibe dos "props" que le pasaremos desde App.jsx:
// 1. currentPage: nos dice qué página está activa actualmente.
// 2. setCurrentPage: es la función que cambia de página al hacer clic.
const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Turismo Tolima</h1>
      
      <div className="nav-buttons">
        <button 
          // Si la página actual es 'inicio', le añadimos la clase 'active'
          className={`nav-btn ${currentPage === 'inicio' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('inicio')}
        >
          Inicio
        </button>
        
        <button 
          className={`nav-btn ${currentPage === 'top-lugares' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('top-lugares')}
        >
          Top Lugares
        </button>
        
        <button 
          className={`nav-btn ${currentPage === 'ruta-pijao' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('ruta-pijao')}
        >
          Ruta Pijao
        </button>
        
        <button 
          className={`nav-btn ${currentPage === 'foro' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('foro')}
        >
          Foro
        </button>
        
        <button 
          className={`nav-btn ${currentPage === 'deportes-tolima' ? 'active' : ''}`} 
          onClick={() => setCurrentPage('deportes-tolima')}
        >
          Deportes Tolima
        </button>
      </div>
    </nav>
  );
};

export default Header;