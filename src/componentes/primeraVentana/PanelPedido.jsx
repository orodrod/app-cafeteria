import React from 'react';
import '../../css/panelPedido.css';
import { useVentas } from '../../context/Contexto'; 
import { useNavigate } from 'react-router-dom'; 

const PanelPedido = ({ seleccionados, finalizar, agregar, quitar }) => {
  /*Aqui conectamos con el contexto. */
  const { registrarNuevoPedido } = useVentas();
  /*Esto hace posible la navegación. */
  const navigate = useNavigate(); 
  
  /*Con cada producto seleccionado se recalcula. */
  const subtotal = seleccionados.reduce((acumulados, p) => acumulados + p.precio, 0);
  const impuesto = subtotal * 0.07;
  const totalFinal = subtotal + impuesto;

  /*Controla que no se envien pedidos vacíos.*/
  const manejarFinalizar = () => {
    if (seleccionados.length === 0) return;
    const impuestoNumero = Number(impuesto.toFixed(2));
    const subtotalNumero = Number(subtotal.toFixed(2));
    registrarNuevoPedido(seleccionados, subtotalNumero, impuestoNumero); // Guardamos en el contexto global
    finalizar(); // Ejecutamos la limpieza y el alert del padre
  };

    /*Aqui se acumulan las cantidades y se pinta de forma que queda prod x num*/
    /*El reduce convierte la lista de clicks en una lista ordenada. */
    const productosAgrupados = seleccionados.reduce((acumulados, producto) => {
      /*Buscamos si ya esta en la lista acuulada */
      const existente = acumulados.find(item => item.id === producto.id);
        if (existente) {
          /*Si existe le sumamos uno y sumamos las cantidades */
        existente.cantidad += 1;
        existente.subtotal += producto.precio;
        } else {
          /*Si no lo añadimos a la lista */
        acumulados.push({
            ...producto,
            cantidad: 1,
            subtotal: producto.precio
        });
        }
        return acumulados;
    }, []);

  return (
    <div className="seleccion">
      <h2 className="titulo-lateral">Pedido Actual</h2>
      
      <div className="lista-seleccion">
        {/*Si no hay productos seleccionados uestra un mmensaje, si no mapeamos. */}
        {productosAgrupados.length === 0 ? (
          <p className="mensaje-vacio">Selecciona productos del menú</p>
        ) : (
          productosAgrupados.map((item) => (
            <div key={item.id} className="item-seleccionado d-flex justify-content-between align-items-center mb-3">
              <div className="info-producto d-flex align-items-center">
                
                {/*Botones de Bootstrap, para quitar o añadir uno desde la lista del pedido.*/}
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
        {/*Finaliza la venta. */}
        <button 
          className="boton-finalizar" 
          onClick={manejarFinalizar} 
          disabled={seleccionados.length === 0}
        >
          Finalizar Venta
        </button>
        {/*Nos lleva a la vista de ventas totales. */}
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