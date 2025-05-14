function CristianoHijo({ onClick }) {
    const manejarClickHijo = (e) => {
      alert("Siuuuuuu!!");
  
      onClick(); 
      e.stopPropagation(); 
    };
  
    return (
      <div>
        <button onClick={manejarClickHijo}>
          Clic en CR7 (Hijo)
        </button>
      </div>
    );
  }
  
export default CristianoHijo;