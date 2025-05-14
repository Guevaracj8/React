import React, { useState } from 'react';

function Producto() {
  // Estado inicial
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

  // Función para modificar el producto
  const modificarProducto = () => {
    console.log("Estado antes de la actualización:", producto);

    // Modificación por referencia: Modificamos el precio directamente (sin crear una copia del objeto principal)
    const nuevoPrecio = 1500;
    const nuevoProducto = { ...producto }; // Hacemos una copia superficial del objeto producto

    // Modificamos el precio por referencia (sin cambiar el objeto completo)
    nuevoProducto.producto.precio = nuevoPrecio; // Cambio directo

    // Modificación por valor: Copiamos la propiedad 'modelo' en el objeto detalles sin modificar el objeto original
    nuevoProducto.producto.detalles = {
      ...nuevoProducto.producto.detalles, // Copiamos las propiedades actuales del objeto detalles
      modelo: "Pro 16" // Modificamos 'modelo' por valor
    };

    // Actualizamos el estado
    setProducto(nuevoProducto);

    // Mostrar estado después de la actualización
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

