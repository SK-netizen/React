import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')
    
    // esta funcion sirve para rellenar el inputText con lo tecleado
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if (newValue.length <= 1 )return;
        // esta es la forma anterior
        //onAddCategories( cat => [inputValue, ...cat]);
        onNewCategory(newValue);
        // pne en blanco lo escrito y se queda el value de inputText de por defecto
        setinputValue('');
        //console.log(inputValue);
    }
    return (
        <>
            <form onSubmit={ (event) => onSubmit(event) }>
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={(event) => onInputChange(event)} >
                </input>
            </form>
        </>
    )
}
