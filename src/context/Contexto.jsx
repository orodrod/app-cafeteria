import React, { createContext, useState, useContext } from 'react';

/* El contexto guarda los estados y las variables para que persistan cuando se cambia entre vistas, si se recarga la pagina se borra */
const Contexto = createContext();

/*Inicializamos nuestras variables y el conteo a 0 */
const estado_inicial = {
  totalVentas: 0,
  totalImpuestos: 0,
  conteoProductos: {} 
};

/*El provider envuelve la app para guardar los datos y poder pasarlos a cualquier compoponente que tenga dentro. */
export const VentasProvider = ({ children }) => {
  
  const [ventasGlobales, setVentasGlobales] = useState(estado_inicial);

  const registrarNuevoPedido = (productosDelPedido, subtotal, impuesto) => {
    /*El prev(callback) hace que no se pierdan datos por el camino. */
    setVentasGlobales(prev => {
      /*Copiamos el historial de productos vendidos para no cambiar el original. */
      const nuevoConteo = { ...prev.conteoProductos };

      /*Sumamos las cantidades de este pedido al conteo global.*/
      productosDelPedido.forEach(prod => {
        nuevoConteo[prod.id] = (nuevoConteo[prod.id] || 0) + 1;
      });
      
      /* Se devuelve el estado actualizado. */
      return {
        totalVentas: prev.totalVentas + (subtotal + impuesto),
        totalImpuestos: prev.totalImpuestos + impuesto,
        conteoProductos: nuevoConteo
      };
    });
  };

  /*Vuelve al estado inicial. */
  const vaciarVentas = () => {
    setVentasGlobales(estado_inicial);
  };

  return (
    <Contexto.Provider value={{ ventasGlobales, registrarNuevoPedido, vaciarVentas }}>
      {children}
    </Contexto.Provider>
  );
};
/*Exportamos use ventas, que guarda use context y context, asi solo importamos useVentas en las vistas. */
export const useVentas = () => useContext(Contexto);