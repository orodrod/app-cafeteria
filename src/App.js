

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartaCafeteria from './componentes/primeraVentana/PrimeraVentana';
import VentanaVentas from './componentes/segundaVentana/SegundaVentana';
import { VentasProvider } from './context/Contexto';
import { useState } from 'react';


function App() {

  const [tema, setTema] = useState('light');

  const cambioTema = () => {
    const nuevoTema = tema === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', nuevoTema);
    setTema(nuevoTema);
  };

  return (
    <VentasProvider>
      <Router>
        <button 
          onClick={cambioTema}
          className={`btn ${tema === 'light' ? 'btn-dark' : 'btn-light'} position-fixed bottom-0 start-0 m-4 rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-2`}
          style={{ 
            width: '60px', 
            height: '60px', 
            zIndex: 9999,
            transition: 'all 0.3s' // Animación suave al cambiar color
          }} 
          title={tema === 'light' ? "Activar Modo Oscuro" : "Activar Modo Claro"}
        >
          {/* Cambiar el icono */}
          {tema === 'light' ? (
             // Si es de día, se muestra la Luna
             <i className="bi bi-moon-stars-fill fs-4"></i>
          ) : (
             // Si es de noche, mostramos el Sol
             <i className="bi bi-sun-fill fs-4"></i>
          )}
        </button>
        <Routes>
          <Route path = "/" element = {<CartaCafeteria/>} />
          <Route path = "/VentasGlobales" element = {<VentanaVentas/>}/>
        </Routes>
      </Router>
    </VentasProvider>
  );
}

export default App;
