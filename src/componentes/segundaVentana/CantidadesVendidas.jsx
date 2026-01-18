import React from 'react';

const CantidadesVentas = (cantidad) => {

    return (
        <div>
            {PRODUCTOS.map((prod) => (
                <BotonProducto 
                    key={prod.id} 
                    producto={prod} 
                    alSeleccionar={seleccionar} 
                />
            ))}
        </div>
    )
};

export default CantidadesVentas;
