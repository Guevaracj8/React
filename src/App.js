import logo from './logo.svg';
import './App.css';
import Etiquetas from './Components/etiquetas';
import DosProps from './Components/dosProps';
import Impuesto from './Components/impuestos';
import Votar from './Components/votar';
import Caracteres from './Components/caracteres';
import ListaEstudiantes from './Components/listaEstudiantes';
import ListaEstudiantesMedicina from './Components/estudianteMedicina';

function App() {
  return (
    <div className="App">
      <Etiquetas/>
      <DosProps nombre="Ricardo" edad={20}/>
      <Impuesto edad={55} ingresos={2500}/>
      <Votar edad={12}/>
      <Caracteres mensaje="Ay mi madre el bicho ay mi madre el bicho"/>
      <ListaEstudiantes/>
      <ListaEstudiantesMedicina/>
    </div>
  );
}

export default App;
