import React, { useState } from 'react';
import Header from './components/layout/Header';
// 1. Importamos el archivo Inicio.jsx basándonos en tu estructura de carpetas
import Inicio from './data/inicio/Inicio';
import Foro from './data/foro/Foro';
function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        // 2. Cuando el estado sea 'inicio', dibujamos tu componente real
        return <Inicio />;
        
      case 'top-lugares':
        return <h2>Página Top Lugares (Próximamente)</h2>;
        
      case 'ruta-pijao':
        return <Foro/>;
        
      case 'foro':
        return <Foro />;
        
      case 'deportes-tolima':
        // Cuando crees DeportesTolima.jsx en tu carpeta "data/deportes tolima/", lo pondremos aquí
        return <h2>Sección Deportes Tolima (Próximamente)</h2>;
        
      default:
        return <h2>Página no encontrada</h2>;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="content">
        {renderContent()}
      </main>
    </>
  );
}

export default App;