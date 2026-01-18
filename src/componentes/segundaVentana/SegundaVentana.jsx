import React from 'react';
import { useVentas} from '../../context/Contexto'; 
import CantidadesVentas from './CantidadesVendidas';
import TablaPrecios from './TablaPrecios';
import Resultados from './Resultados';

const VentanaVentas = () => {
    //Definimos la funcion que importamos.
    const {ventasGlobales} = useVentas();
    //Hay que sacar del contexto las variables que queremos.
    const {conteoProductos, totalVentas, totalImpuestos} = ventasGlobales;
    //Separo del total de ventas el subtotal sin impuesto.
    const venta = totalVentas - totalImpuestos;

    return(
        <div className='contenedor-ventas'>
            <CantidadesVentas cantidad = {conteoProductos}/>
            <div className='contenedor-resultados'>
                <TablaPrecios/>
                <Resultados subtotal = {venta} impuestos = {totalImpuestos} total = {totalVentas}/>
            </div>
        </div>
    )
};

export default VentanaVentas;