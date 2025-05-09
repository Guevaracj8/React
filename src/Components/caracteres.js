
function Caracteres(props){

    const longitud = Object.keys(props.mensaje).length
    if(longitud > 5)
        return props.mensaje
    else
        return <p>El Mensaje es muy corto</p>
}

export default Caracteres;