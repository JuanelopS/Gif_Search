// import { getGifs } from './helpers/getGifs';
// import { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

/* cada vez que React detecta un cambio en un componente lo vuelve a ejecutar para redibujarlo:
   por ello aparecen dos console.log (ejecuta dos veces este componente) React.StrictMode */

export const GifGrid = ({ category, page }) => {
   
    // custom hook
    
    const { images, isLoading } = useFetchGifs( category, page );

    // console.log({ isLoading });

    // const [images, setImages] = useState([]);
  
    /* useEffect: sirve para disparar efectos secundarios -> 
      que se ejecute un proceso cuando algo suceda (Ej: cuando cambie el counter, 
      se renderiza el componente por 1ª vez, etc...) */
  
    /* argumentos useEffect: función y array de "dependencias" 
      (dependencias vacias [] -> el hook sólo se disparara cuando se crea/construya el componente)
      opción return -> cleanup */

    // const getImages = async() => {
    //   const newImages = await getGifs( category );
    //   setImages(newImages);
    // }

    // useEffect(() => {
    //   getImages();
    // }, []);

    return (
    <>
        <h3 className='category'>{ category }</h3>
        {
            // if corto de una sola condición (No necesario un ternario con null)
            isLoading && ( <h2>Cargando...</h2> )
        }
        <div className='card-grid'>
            { 
              images.map( ( image ) => 
                <GifItem 
                  key={ image.id }
                  // title={ image.title }
                  // url={ image.url }

                  // cuando hay muchas propiedades puede usarse el spread operator
                  { ...image }
                />
              ) 
            }
        </div>
    </>
  )
}
