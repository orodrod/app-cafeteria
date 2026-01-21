import React, { createContext, useState, useContext } from 'react';

const Contexto = createContext();

const estado_inicial = {
  totalVentas: 0,
  totalImpuestos: 0,
  conteoProductos: {} 
};

export const VentasProvider = ({ children }) => {
  const [ventasGlobales, setVentasGlobales] = useState(estado_inicial);

  const registrarNuevoPedido = (productosDelPedido, subtotal, impuesto) => {
    setVentasGlobales(prev => {
      const nuevoConteo = { ...prev.conteoProductos };

      // Sumamos las cantidades de este pedido al conteo global
      productosDelPedido.forEach(prod => {
        nuevoConteo[prod.id] = (nuevoConteo[prod.id] || 0) + 1;
      });

      return {
        totalVentas: prev.totalVentas + (subtotal + impuesto),
        totalImpuestos: prev.totalImpuestos + impuesto,
        conteoProductos: nuevoConteo
      };
    });
  };

  const vaciarVentas = () => {
    setVentasGlobales(estado_inicial);
  };

  return (
    <Contexto.Provider value={{ ventasGlobales, registrarNuevoPedido, vaciarVentas }}>
      {children}
    </Contexto.Provider>
  );
};

export const useVentas = () => useContext(Contexto);