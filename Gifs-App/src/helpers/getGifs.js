export const getGifs = async (category, countImages) => {
    // peticion http para consegir los gifs
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GvcKwGDuoN0DFgvzrgNPpHRD1Mq23njD&q=${category}&limit=${countImages}`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
}