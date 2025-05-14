function BotonConAlerta({ texto }) {
    const manejarClick = () => {
      alert(texto);
    };
  
    return (
      <button onClick={manejarClick}>
        {texto}
      </button>
    );
  }
  
  export default BotonConAlerta;