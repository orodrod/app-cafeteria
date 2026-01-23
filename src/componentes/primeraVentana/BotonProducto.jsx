import React from 'react';
import '../../css/botonProducto.css'; 

/*Dibuja el boton/tarjeta de los productos, con su imagen su nombre y su precio. */
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