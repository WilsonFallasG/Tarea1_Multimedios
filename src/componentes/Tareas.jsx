import React from 'react'
import { useState } from 'react';
import './styles.css';

function Tareas(props) {
    const [nuevaTarea, setNuevaTarea] = useState()

    const handleSubmit = (e) =>{
     e.preventDefault();
     props.crearTarea(nuevaTarea)
     localStorage.setItem('input', nuevaTarea)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Ingresar nueva tarea'
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button>Guardar</button>
            </form>
        </div>
    )
}

export default Tareas
