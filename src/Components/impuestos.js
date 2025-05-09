
function Impuesto(props){

    if(props.edad > 16 && props.ingresos >= 1000)
        return <p>Debes tributar impuestos</p>
    else
        return <p>Te salvaste de impuestos</p>
}

export default Impuesto;