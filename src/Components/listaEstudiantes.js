
import { estudiantes } from "./data/estudiantes";

function ListaEstudiantes(){
    const listEstudiantes = estudiantes.map(estudiante =>
        <li>
            key={estudiante.id}
            <p>Estudiante: {estudiante.nombre}</p>
            <p>Carrera: {estudiante.carrera}</p>
            <p>Edad: {estudiante.edad}</p>
        </li>
    )
    return <ul>{listEstudiantes}</ul>
}

export default ListaEstudiantes;