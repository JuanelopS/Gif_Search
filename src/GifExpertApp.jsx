import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
    // CUANDO SE QUIERE ALMACENAR INFORMACIÓN Y DICHA INFORMACIÓN TIENE QUE CAMBIAR EL HTML:
    // HOOK DE REACT PARA ALMACENAR EL ESTADO -> useState

    const [ categories, setCategories ] = useState([]);
    
    //recibe el string y lo coloca al principio del array a mostrar
    const onAddCategory = ( newCategory ) => {
        
        console.log(newCategory);
        // categories.push('Valorant');

        // Si el array categories ya incluye la nueva categoria a añadir, return (que no haga nada)
        if ( categories.includes(newCategory) ) return;

        // setCategories([ newCategory, ...categories ]);
        setCategories([ newCategory ]);
        // setCategories ( cat => [ 'Valorant',...cat ]);
    }

    return (
    <>

        <h1>React Gif Search (Giphy API)</h1>

        <AddCategory 
            onNewCategory={ value => onAddCategory(value) }
        />
            { 
                categories.map( category =>  (
                        <GifGrid key={ category } category={ category }/>
                    )
                )
            }
    </>
  )
}
