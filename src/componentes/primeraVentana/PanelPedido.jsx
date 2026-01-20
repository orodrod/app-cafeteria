import React from 'react';
import '../../css/panelPedido.css';
import { useVentas } from '../../context/Contexto'; 
import { useNavigate } from 'react-router-dom'; 

const PanelPedido = ({ seleccionados, finalizar, agregar, quitar }) => {
  const { registrarNuevoPedido } = useVentas();
  const navigate = useNavigate(); 
  
  const subtotal = seleccionados.reduce((acc, p) => acc + p.precio, 0);
  const impuesto = subtotal * 0.07;
  const totalFinal = subtotal + impuesto;

  const manejarFinalizar = () => {
    if (seleccionados.length === 0) return;
    registrarNuevoPedido(seleccionados, subtotal, impuesto); // Guardamos en el contexto global
    finalizar(); // Ejecutamos la limpieza y el alert del padre
  };

    const productosAgrupados = seleccionados.reduce((acc, producto) => {
        const existente = acc.find(item => item.id === producto.id);
        if (existente) {
        existente.cantidad += 1;
        existente.subtotal += producto.precio;
        } else {
        acc.push({
            ...producto,
            cantidad: 1,
            subtotal: producto.precio
        });
        }
        return acc;
    }, []);

  return (
    <div className="seleccion">
      <h2 className="titulo-lateral">Pedido Actual</h2>
      
      <div className="lista-seleccion">
        {productosAgrupados.length === 0 ? (
          <p className="mensaje-vacio">Selecciona productos del menú</p>
        ) : (
          productosAgrupados.map((item) => (
            <div key={item.id} className="item-seleccionado d-flex justify-content-between align-items-center mb-3">
              <div className="info-producto d-flex align-items-center">
                
                {/*Botones de Bootstrap*/}
                <div className="btn-group btn-group-sm me-3" role="group">
                  <button 
                    type="button" 
                    className="btn btn-outline-danger" 
                    onClick={() => quitar(item.id)}
                  >
                    <i className="bi bi-dash"></i>
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-outline-secondary fw-bold" 
                    disabled 
                  >
                    {item.cantidad}
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-outline-success" 
                    onClick={() => agregar(item)}
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                <span className="nombre-producto">{item.nombre}</span>
              </div>
              <strong>{item.subtotal.toFixed(2)}€</strong>
            </div>
          ))
        )}
      </div>

      <div className="footer-lateral">
        <div className="desglose-precio">
          <span>Subtotal:</span>
          <span>{subtotal.toFixed(2)}€</span>
        </div>
        <div className="desglose-precio">
          <span>Impuestos (7%):</span>
          <span>{impuesto.toFixed(2)}€</span>
        </div>
        <div className="total-compra">
          <span>Total:</span>
          <span>{totalFinal.toFixed(2)}€</span>
        </div>

        <button 
          className="boton-finalizar" 
          onClick={manejarFinalizar} 
          disabled={seleccionados.length === 0}
        >
          Finalizar Venta
        </button>

        <button 
          className="boton-ventas-globales" 
          onClick={() => navigate('/ventasGlobales')} 
        >
          Ver Ventas Globales
        </button>
      </div>
    </div>
  );
};

export default PanelPedido;