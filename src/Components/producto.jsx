import React, { useState } from 'react';

function Producto() {
  const [producto, setProducto] = useState({
    producto: {
      nombre: "Laptop",
      precio: 1200,
      detalles: {
        marca: "XYZ",
        modelo: "Pro 15"
      }
    }
  });

  const modificarProducto = () => {
    console.log("Estado antes de la actualización:", producto);

    const nuevoPrecio = 1500;
    const nuevoProducto = { ...producto }; 

    nuevoProducto.producto.precio = nuevoPrecio; 

    nuevoProducto.producto.detalles = {
      ...nuevoProducto.producto.detalles, 
      modelo: "Pro 16" 
    };

    setProducto(nuevoProducto);

    console.log("Estado después de la actualización:", nuevoProducto);
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      <div>
        <p><strong>Nombre:</strong> {producto.producto.nombre}</p>
        <p><strong>Precio:</strong> ${producto.producto.precio}</p>
        <p><strong>Marca:</strong> {producto.producto.detalles.marca}</p>
        <p><strong>Modelo:</strong> {producto.producto.detalles.modelo}</p>
      </div>
      <button onClick={modificarProducto}>Modificar Producto</button>
    </div>
  );
}

export default Producto; 

