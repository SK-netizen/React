import { useState } from 'react'

export const AddCategory = ({onAddCategories}) => {

    const [inputValue, setinputValue] = useState('')
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1 )return;
        onAddCategories( cat => [inputValue, ...cat]);
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
