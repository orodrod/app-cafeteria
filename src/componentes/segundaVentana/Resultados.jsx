import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../../css/resultados.css'

const Resultados = ({subtotal, impuestos, total, vaciarDatos}) => {
    const navigate = useNavigate();
    const salirApp = () => {
        window.close();

        if(!window.closed){
            window.location.href = "https://www.google.com"
        }
    };

    return (
        <div className='contenedor-res'>
            <div className='wraper'>
                <div className='d-flex flex-row px-5 gap-5 justify-content-between'>
                    <div>
                        <p>Subtotal:</p>
                    </div>
                    <div>
                       <input type='text' className='form-control text-end' value={subtotal.toFixed(2)}/> 
                    </div>
                </div>
                <div className='d-flex flex-row px-5 gap-5 justify-content-between'>
                    <div>
                        <p>Impuestos:</p>
                    </div>
                    <div>
                        <input type='text' className='form-control text-end' value={impuestos.toFixed(2)}/>
                    </div>
                </div>
                <div className='d-flex flex-row px-5 gap-5 justify-content-between'>
                    <div>
                        <p>Ventas Totales:</p>
                    </div>
                    <div>
                        <input type='text' className='form-control text-end' value={total.toFixed(2)}/>
                    </div>
                </div>
                     
            </div>
            <div className='d-flex flex-row px-5 gap-3'>
                <button 
                    className="boton-ventas-globales" 
                    onClick={() => navigate('/')} 
                    >
                    Volver a los Pedidos
                </button>
                <button 
                    className="boton-ventas-globales" 
                    onClick={vaciarDatos}>
                    Limpiar
                </button>
                <button 
                    className="boton-ventas-globales" 
                    onClick={salirApp} 
                    >
                    Salir de la App
                </button>
            </div>
        </div>
    );
};

export default Resultados;