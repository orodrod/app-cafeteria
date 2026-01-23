import React, {useState} from 'react';
import Grid from './Grid';
import PanelPedido from './PanelPedido';
import Swal from 'sweetalert2';
import '../../css/ventanas.css'

const CartaCafeteria = () => {
    /*Aqui se van guardando los productos añadidos. */
    const [pedido, setPedido] = useState([]);

    /*La funcion que se encarga de agregar el producto a la lista. */
    const agregarProducto = (producto) => {
        setPedido([...pedido, producto]);
    };

    /*Esta funcion maneja la finalización del pedido, lanza una alerta temporal  que confirma el pedido. */
    const finalizarVenta = () => {
        Swal.fire({
            title: '¡Venta Registrada!',
            text: 'El pedido se ha guardado correctamente.',
            icon: 'success',
            confirmButtonColor: '#198754', 
            timer: 2000, // Se cierra sola en 2 segundos
            timerProgressBar: true
        });
        setPedido([]); // Limpia el panel después de vender
    };

    /*La función encargada de quitar una unidad de un producto del panel de pedidos. */
    const quitarUno = (idProducto) => {
        const listaTemporal = [...pedido];
        //Buscamos el index por el id del producto
        const index = listaTemporal.findIndex(item => item.id === idProducto);
        //si existe, el splice elimina 1 en donde marca el index
        if (index !== -1) {
        listaTemporal.splice(index, 1);
        setPedido(listaTemporal);
        }
    };

    /*La encargada de añadir una unidad en el panel de pedido. */
    const agregarUno = (producto) => {
        setPedido([...pedido, producto]);
    };

    /*Retorna la composición de los componentes más pequeños y les pasa los parámetros y funciones necesarias para funcionar. */
    return (
        <div className='contenedor-principal'>
            <Grid seleccionar = {agregarProducto}/>
            <PanelPedido seleccionados = {pedido} finalizar = {finalizarVenta} agregar = {agregarUno} quitar = {quitarUno}/>
        </div>
    )
};

export default CartaCafeteria;