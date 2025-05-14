import logo from './logo.svg';
import './App.css';
import BotonConAlerta from './Components/boton';
import Hijo from './Components/hijo';
import CristianoHijo from './Components/componentescr7';
import ContadorConSnapshot from './Components/contador';
import Contador from './Components/contador';
import Producto from './Components/producto';
import AnimalList from './Components/animales';

function App() {

  const manejarClickDesdeHijo = (nombreRecibido) => {
    alert(`El hijo me envió: ${nombreRecibido}`);
  };

  const manejarClickPadre = () => {
    alert("Botón del componente padre presionado");
  };

  const manejarClickPadreEntrenador = () => {
    alert("¡El Entrenador escuchó el Siuuu de gol de Cristiano!");
  };

  return (
    <div className="App">
      <BotonConAlerta texto="Haz clic aquí" />

      <button onClick={manejarClickPadre}>Click desde el Padre</button>

      <Hijo
        nombre="elbicho"
        edad={40}
        ciudad="no c por ahi en arabia"
        onPropClick={manejarClickDesdeHijo}
      />

      <CristianoHijo onClick={manejarClickPadreEntrenador}/>

      <Contador/>

      <Producto/>

      <AnimalList/>
    </div>
  );
}

export default App;
