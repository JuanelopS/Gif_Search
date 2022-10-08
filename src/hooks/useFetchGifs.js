import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category, page ) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );
  
  const getImages = async() => {
    const newImages = await getGifs( category, page );
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, [page]);


  return {
      images,
      isLoading
  }
}
