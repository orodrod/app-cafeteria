import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../../css/resultados.css'

const Resultados = () => {
    const navigate = useNavigate();

    return (
        <div className='contenedor-res'>
            <div>
                
            </div>
            <div className='contenedor-botones d-flex flex-row px-3 gap-3'>
                <button 
                    className="boton-ventas-globales" 
                    onClick={() => navigate('/')} 
                    >
                    Volver a los Pedidos
                </button>
                <button 
                    className="boton-ventas-globales" 
                    onClick={() => navigate('/ventasGlobales')} 
                    >
                    Limpiar
                </button>
                <button 
                    className="boton-ventas-globales" 
                    onClick={() => navigate('/ventasGlobales')} 
                    >
                    Salir de la App
                </button>
            </div>
        </div>
    );
};

export default Resultados;