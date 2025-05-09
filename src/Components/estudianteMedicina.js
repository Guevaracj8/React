
import { estudiantes } from "./data/estudiantes";

function ListaEstudiantesMedicina(){
    const listEstudiantes = estudiantes.map(estudiante =>
        {if(estudiante.carrera == "Medicina")
            return <li>
                <h1>Estudiantes de Medicina</h1>
                key={estudiante.id}
                <p>Estudiante: {estudiante.nombre}</p>
                <p>Carrera: {estudiante.carrera}</p>
                <p>Edad: {estudiante.edad}</p>
        </li>}
    )
    return <ul>{listEstudiantes}</ul>
}

export default ListaEstudiantesMedicina;