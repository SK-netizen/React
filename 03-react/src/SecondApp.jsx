import PropTypes from 'prop-types';

const newMessage = 'Roberto'
const newArray = [1,2,3,4,5,6]
const newObject = {
    nombre:'Roberto',
    edad:26
}
const fuuu = ()=>{
    return "Esto es el resultado de una funcion en un componente de react";
}
const edad = (uno, dos)=>{
    return uno + dos;
}

// lso componentes pueden mostrar cualquier cosa menos objetos
export const SecondApp = function ( { title, subtitle } ) {



    // PROPS
    
    return (
    <>
        <h1>Hola mundo { newArray }</h1>
        <h2>{title}</h2>
        <h3> {subtitle + 2} </h3>


        <p>Soy una persona llamada { newMessage } y mi edad es {edad(25,1)}.</p>
        <code>Soy { JSON.stringify(newObject) }</code>
        <p>El resultado de la funcion fuuu <code>{fuuu()}</code></p>
    </>
    )
}

SecondApp.prototype = {
    title: PropTypes.string,
    subtitle: PropTypes.number.isRequired,

}
SecondApp.defaultProps = {
    title:"No hay titulo"
}
