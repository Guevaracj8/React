import React from 'react';

function Hijo({ nombre, edad, ciudad, onPropClick }) {
  const manejarClickHijo = () => {
    alert(`Soy el hijo: ${nombre}`);
    onPropClick(nombre); 
  };

  return (
    <div>
      <h3>Componente Hijo</h3>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Ciudad: {ciudad}</p>
      <button onClick={manejarClickHijo}>Click desde el Hijo</button>
    </div>
  );
}

export default Hijo;
