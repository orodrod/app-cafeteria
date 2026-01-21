import React from 'react';
import { useVentas} from '../../context/Contexto'; 
import CantidadesVentas from './CantidadesVendidas';
import TablaPrecios from './TablaPrecios';
import Resultados from './Resultados';
import '../../css/ventanas.css';


const VentanaVentas = () => {
    //Definimos la funcion que importamos.
    const {ventasGlobales, vaciarVentas} = useVentas();

    if (!ventasGlobales) {
        return <div>Cargando datos de ventas...</div>;
    }
    //Hay que sacar del contexto las variables que queremos.
    const {conteoProductos, totalVentas, totalImpuestos} = ventasGlobales;
    //Separo del total de ventas el subtotal sin impuesto.
    const venta = totalVentas - totalImpuestos;

    return(
        <div className='contenedor-principal'>
            <div>
                <div>
                <CantidadesVentas cantidad = {conteoProductos}/>
            </div>
            </div>
            <div className='contenedor-resultados'>
                <TablaPrecios/>
                <Resultados subtotal = {venta} impuestos = {totalImpuestos} total = {totalVentas} vaciarDatos = {vaciarVentas}/>
            </div>
        </div>
    )
};

export default VentanaVentas;