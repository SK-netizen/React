import { useState } from 'react';
import { AddCategory, GifGrid, GifItem } from './components';

export const GifsExpertApp = () => {

    // cada vez que un huse estate es modificado se redibuja el componente
    const [categories, setcategorie] = useState([]);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setcategorie(cat => [value, ...cat]);
    }
    const deleteCategory = (value) => {
        let catAxus = [];
        categories.map(cat => {
            if (cat != value) {
                catAxus = [...catAxus, cat]
            }
        })
        setcategorie(catAxus);
    }

    return (<>
        <nav>
            <h1>GifsExpertApp</h1>
            <div>
                <AddCategory
                    onNewCategory={(value) => onAddCategory(value)}>
                </AddCategory>
            </div>
        </nav>
        <div className='content'>
            {
                categories.map(category => {
                    return (
                        /*Necesita una key porque al mapear es como si fuera un hashmap */
                        <GifGrid key={category} category={category} deleteCategory={deleteCategory}></GifGrid>
                    )
                })
            }
        </div>

    </>)
};