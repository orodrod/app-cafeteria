import React from 'react';
import '../../css/botonProducto.css'; 

const BotonProducto = ({ producto, alSeleccionar }) => {
  return (
    <button className="boton-producto" onClick={() => alSeleccionar(producto)}>
      <div className="imagen-wrapper">
        <img 
          src={producto.img} 
          alt={producto.nombre} 
          className="imagen"
        />
      </div>
      <span className="nombre">{producto.nombre}</span>
      <span className="precio">{producto.precio.toFixed(2)}€</span>
    </button>
  );
};

export default BotonProducto;