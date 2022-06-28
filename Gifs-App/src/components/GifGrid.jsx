import React from 'react'

import { GifItem } from './GifItem'
import { useFechtGifs } from '../hooks/useFechtGifs'


import { useState, useEffect } from 'react'
// desempaquetamos al categorya las props
export const GifGrid = ({ category, deleteCategory}) => {


    const deleteOfArray = (event) => {
        deleteCategory(category);
    }
    const addMoreGifs = (event) => {
        addGifs();
    }

    const { images, isLoading, addGifs} = useFechtGifs(category);
    return (
        <>
            <div className='titleButton'>
                <div>
                    <h3>{category}</h3>
                </div>
                <div>
                    <button onClick={ (event) => {deleteOfArray(event)}}>Delete</button>
                </div>
                <div>
                    <button onClick={ (event) => {addMoreGifs(event)}}>Mas</button>
                </div>
            </div>
            {
                isLoading ?( <h4>Cargando...</h4> )
                : null
                // isLoading && ( <h4>Cargando...</h4> )
            }
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifItem key={img.id} {...img} ></GifItem>
                    ))
                }
            </div>
        </>
    )
}
