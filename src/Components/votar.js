
function Votar(props){

    if(props.edad > 18)
        return <p>Ya puedes votar!!!!!</p>
    else
        return <p>Solo espera con paciencia!!</p>
}

export default Votar;