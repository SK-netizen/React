import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const apiKey = "GvcKwGDuoN0DFgvzrgNPpHRD1Mq23njD"
const url = "api.giphy.com/v1/gifs/random"

export const GifsExpertApp = () => {

    const [categories, setcategorie] = useState(['Juas Juas', 'Paco']);
    const onAddCategory = (value) => {
        //setcategorie( [...categories,'SuperMan'] );
        setcategorie( cat => [value, ...cat]);
        //console.log(value);
    }

    return (<>
        {/* Titulo */}
        <h1>GifsExpertApp</h1>

        {/*Input */}
        <AddCategory onAddCategories={ setcategorie }></AddCategory>

        {/*Listado de Gif */}
        {/* <button onClick={ (event) => onAddCategory("Rick And Morty")}>Agrgar</button> */}
        <ol>
            {
            categories.map(category => {
                return <li key={ category }>{ category }</li>
                })
            }
        </ol>
        {/*Gif items */}

    </>)
};