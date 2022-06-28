
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import React from 'react'


// esto es un custom hooks
export const useFechtGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [countImages, setcountImages] = useState(5)

    const getImages = async () => {
        const newImages = await getGifs(category, countImages);
        setimages(newImages);
        setisLoading(false);
        console.log(countImages);
    }
    const addGifs = async ()=>{
        setcountImages(countImages+5);
        const newImages = await getGifs(category, countImages);
        setimages(newImages);
        setisLoading(false);
        console.log(countImages);
        
    }

    useEffect(() => {
        getImages();
        addGifs();
    }, [])
    return {
        images: images,
        isLoading: isLoading,
        countImages: countImages,
        setcountImages : setcountImages,
        getImages: getImages,
        addGifs:addGifs,
    }
}
