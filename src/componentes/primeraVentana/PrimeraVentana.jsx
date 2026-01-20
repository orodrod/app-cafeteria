import React, {useState} from 'react';
import Grid from './Grid';
import PanelPedido from './PanelPedido';
import '../../css/ventanas.css'

const CartaCafeteria = () => {
    const [pedido, setPedido] = useState([]);

    const agregarProducto = (producto) => {
        setPedido([...pedido, producto]);
    };

    const finalizarVenta = () => {
        alert("Venta registrada con éxito");
        setPedido([]); // Limpia el panel después de vender
    };

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

    const agregarUno = (producto) => {
        setPedido([...pedido, producto]);
    };

    return (
        <div className='contenedor-principal'>
            <Grid seleccionar = {agregarProducto}/>
            <PanelPedido seleccionados = {pedido} finalizar = {finalizarVenta} agregar = {agregarUno} quitar = {quitarUno}/>
        </div>
    )
};

export default CartaCafeteria;