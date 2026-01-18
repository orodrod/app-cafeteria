import React, { createContext, useState, useContext } from 'react';

const Contexto = createContext();

export const VentasProvider = ({ children }) => {
  const [ventasGlobales, setVentasGlobales] = useState({
    totalVentas: 0,
    totalImpuestos: 0,
    conteoProductos: {} // Guardará { "id_producto": cantidad }
  });

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

  return (
    <Contexto.Provider value={{ ventasGlobales, registrarNuevoPedido }}>
      {children}
    </Contexto.Provider>
  );
};

export const useVentas = () => useContext(Contexto);