// Si se usa el await este función tiene que ser async
export const getGifs = async( category, page ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HTfrEZwhPGj4mEbIENI83ZSvOe5hBHqK&q=${ category }&limit=25&offset=${ page }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log(gifs)
    return gifs;
}

