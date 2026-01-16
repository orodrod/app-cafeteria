
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/*Hueco para el boton de claro/oscuro 
      button .....
      
      */}


      <Routes>
        <Route path = "/" element = {<CartaCafeteria/>} />
        <Route path = "/VentasGlobales" element = {<VentanaVentas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
