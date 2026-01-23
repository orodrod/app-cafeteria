import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/cantidadesVendidas.css';
import { PRODUCTOS } from '../Productos';

const CantidadesVentas = ({cantidad}) => {

    /*Pintamos la tabla con las cantidades. */
    return (
        <div className='contenedor'>
            <header className="cabecera">
                <h1 className="cabecera-titulo">Ventas Globales Cafetería La Herradura</h1>
            </header>
            <div className='tabla-wraper'>
                <table className='tabla-cantidad'>
                        <thead className='cabecera-tabla-cantidad'>
                            <tr >
                                <th>Producto</th>
                                <th>Cantidad Vendida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*Mapeamos todos los productos, dara 0 en los que no se ha comprado y la cantidad que viene del contexto en los que si. */}
                            {
                                PRODUCTOS.map((item) => {
                                    const numeroVentas = cantidad[item.id] || 0;
                                    return (<tr key={item.id} className='filas'>
                                                <td>{item.nombre}</td>   
                                                <td >{numeroVentas}</td>
                                            </tr>)
                                })
                            }
                        </tbody>
                </table>
            </div>
            
        </div>
    )
};

export default CantidadesVentas;
