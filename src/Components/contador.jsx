import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const manejarClick = () => {
    setTimeout(() => {
      setSnapshot(contador);
      
      setContador(contador + 1);
    }, 1000); 
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Contador actual: {contador}</p>
      <p>Anterior: {snapshot !== null ? snapshot : "Ninguna"}</p>
      <button onClick={manejarClick}>Incrementar contador</button>
    </div>
  );
}

export default Contador;
