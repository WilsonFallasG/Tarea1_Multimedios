import './App.css';
import Tareas from './componentes/Tareas';
import React, { useEffect, useState } from 'react';
 
function App() {
  const [nuevoItem, setNuevoItem]= useState ([
    {name:'Revisar mayerial x', done: false},
    {name:'Revisar mayerial y', done: false},
    {name:'Revisar mayerial z', done: false}
  ])

  function crearTarea(nuevaTarea){
    if(!nuevoItem.find(tarea => tarea.name===nuevaTarea)){
      setNuevoItem([...nuevoItem,{name: nuevaTarea, done:false}])
    } 
  }

  // Función para eliminar tareas
  function eliminarTarea(nombreTarea){
    setNuevoItem(nuevoItem.filter(tarea => tarea.name !== nombreTarea));
  }

  useEffect (()=>{
    localStorage.setItem ('input',JSON.stringify(nuevoItem))
  },[nuevoItem])

  return (
    <div className="App">
      <Tareas crearTarea= {crearTarea} eliminarTarea={eliminarTarea}/>
      <table>
        <thead>
          <tr>
            TAREAS
          </tr>
        </thead>
        <tbody>
          {nuevoItem.map(tarea => (
            <tr key={tarea.name}>
              {tarea.name}
              <button onClick={() => eliminarTarea(tarea.name)}>Eliminar</button>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
}
export default App;
