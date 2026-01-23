import React from 'react';
import '../../css/grid.css';
import BotonProducto from './BotonProducto';
import {PRODUCTOS} from '../Productos';

/*Recibimos la función de selección del padre y se la pasamos al botón hijo. Este componente sólo se encarga de pintar la cuadrícula. */
const Grid = ({seleccionar}) => {
    return(
        <div className="grid-productos">
            <header className="cabecera">
                <h1 className="cabecera-titulo">Cafetería La Herradura</h1>
            </header>
            {/*Mapeamos la lista de productos, lo que crea un botón por cada producto. */}
            <div className="contenedor-productos">
                {PRODUCTOS.map((prod) => (
                <BotonProducto 
                    key={prod.id} 
                    producto={prod} 
                    alSeleccionar={seleccionar} 
                />
                ))}
            </div>
        </div>
    )
    
}

export default Grid;