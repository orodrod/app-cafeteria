import React from 'react';
import {PRODUCTOS} from '../Productos';
import '../../css/tablaPrecios.css'

/*Pintamos los productos con sus precios en una tabla. */
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
                        {/*Se mapean todos los productos con su precio para montar la tabla. */}
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