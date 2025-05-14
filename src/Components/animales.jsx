import React, { useState } from 'react';

function AnimalList() {
  const [animales, setAnimales] = useState(["perro", "gato", "pato", "caballo", "conejo"]);

  const agregarGanso = () => {
    setAnimales((prevAnimales) => [
      ...prevAnimales,  
      "Ganso"   
    ]);
  };

  return (
    <div>
      <h1>Lista de Animales</h1>
      <ul>
        {animales.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
      <button onClick={agregarGanso}>Agregar Ganso</button>
    </div>
  );
}

export default AnimalList;
