import React, { useState } from 'react';

const CirujanoReact = () => {
    // Estado para el texto del input y la lista de elementos
    const [texto, setTexto] = useState('');
    const [elementos, setElementos] = useState([]);

    const agregarAlDOM = () => {
        if (texto.trim() === '') return;

        // Crear objeto de nodo con color aleatorio
        const nuevoNodo = {
            id: Date.now(),
            contenido: texto,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        };

        // Actualizar estado usando Spread Operator (ES6)
        setElementos([...elementos, nuevoNodo]);
        setTexto('');
    };

    return (
        <div style={{ padding: '30px', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
            <h2>Migración: El Cirujano del DOM en React 18</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={texto} 
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Ingreso de datos seguro..."
                    style={{ padding: '10px', borderRadius: '5px', border: 'none' }}
                />
                <button 
                    onClick={agregarAlDOM}
                    style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer', backgroundColor: '#00ff88', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
                >
                    Inyectar Nodo
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {elementos.map((item) => (
                    <li 
                        key={item.id} 
                        style={{ 
                            backgroundColor: item.color, 
                            padding: '15px', 
                            margin: '10px 0', 
                            borderRadius: '8px',
                            fontWeight: 'bold'
                        }}
                    >
                        {item.contenido}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CirujanoReact;
