import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const apiKey = "GvcKwGDuoN0DFgvzrgNPpHRD1Mq23njD"
const url = "api.giphy.com/v1/gifs/random"

export const GifsExpertApp = () => {

    const [categories, setcategorie] = useState(['Juas Juas', 'Paco']);
    
    const onAddCategory = (value) => {
        //setcategorie( [...categories,'SuperMan'] );
        // de esta forma no diferencai entre mayusculas y minusculas
        //if ( categories.find( cat => cat.toLowerCase() == value.toLowerCase() ) ) return;
        // otra forma de acerlo no poder poner dos valores iguales
        if ( categories.includes(value) ) return;
        setcategorie( cat => [value, ...cat]);
        //console.log(value);
    }

    return (<>
        {/* Titulo */}
        <h1>GifsExpertApp</h1>

        {/*Input */}
        {/* esta es la forma menos correcta
            ya que es el elemento AddCategory el que inserta

        <AddCategory onAddCategories={ setcategorie }></AddCategory> 

            La forma correcta sera que el elemento 
            AddCategory devolveriea lo que queremos insertar*/}

        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) }
        ></AddCategory>

        {/*Listado de Gif */}
        {/* <button onClick={ (event) => onAddCategory("Rick And Morty")}>Agrgar</button> */}
        <ul>
            {
            categories.map(category => {
                return (
                    /*Necesita una key porque al mapear es como si fuera un hashmap */
                        <GifGrid key={category} category={ category }></GifGrid>
                    )
                })
            }
        </ul>
        {/*Gif items */}

    </>)
};