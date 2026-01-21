import React from 'react';
import {PRODUCTOS} from '../Productos';
import '../../css/tablaPrecios.css'

const TablaPrecios = () => {

    return (
        <div className='contenedor-tabla'>
            <div className='envoltura'>
                <table className='tabla-precios'>
                    <thead className='cabecera-tabla'>
                        <tr >
                            <th>Producto</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        PRODUCTOS.map((item) => {
                            return (<tr key={item.id} className='precios-productos'>
                                        <td>{item.nombre}</td>   
                                        <td >{item.precio.toFixed(2)} €</td>
                                    </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default TablaPrecios;