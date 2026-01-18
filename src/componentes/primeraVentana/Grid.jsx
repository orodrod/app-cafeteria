import React from 'react';
import '../../css/grid.css';
import BotonProducto from './BotonProducto';
import {PRODUCTOS} from '../Productos';

const Grid = ({seleccionar}) => {
    return(
        <div className="grid-productos">
            <header className="cabecera">
                <h1 className="cabecera-titulo">Cafetería La Herradura</h1>
            </header>
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