
export default function ProductDetails({ params }) {
    const { id } = params;  
  
    return (
      <div className="d-flex flex-column justify-content-center align-items-center p-2">
        <h1>Detalles del Partido</h1>
        <p>El ID del partido es: {id}</p>
      </div>
    );
  }
  