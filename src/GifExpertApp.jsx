import { useState, useEffect } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
    // CUANDO SE QUIERE ALMACENAR INFORMACIÓN Y DICHA INFORMACIÓN TIENE QUE CAMBIAR EL HTML:
    // HOOK DE REACT PARA ALMACENAR EL ESTADO -> useState

    const [ categories, setCategories ] = useState([]);
    const [ page, setPage ] = useState(0);

    //recibe el string y lo coloca al principio del array a mostrar
    const onAddCategory = ( newCategory ) => {
        
        // console.log(newCategory);
        // categories.push('Valorant');

        // Si el array categories ya incluye la nueva categoria a añadir, return (que no haga nada)
        // if ( categories.includes(newCategory) ) return;

        // setCategories([ newCategory, ...categories ]);
        setCategories([ newCategory ]);
        // setCategories ( cat => [ 'Valorant',...cat ]);

        
    }

    // condiciones para el paginado de gifs
    const prevPage = () => {
      page > 25 && (setPage(page - 25));
      
    } 
    const nextPage = () => {
      categories.length > 0 && (setPage(page + 25));
    } 

    return (
    <>
        <header className='header'>
          <h1>React Gif Search (Giphy API)</h1>

          <AddCategory 
            onNewCategory={ value => onAddCategory(value) }
          />
        </header>

        { categories.map( (category, index) => ( 
            <GifGrid key={ index } category={ category } page={ page }/>
          ))
        }
        
        <footer className='footer'>
          <div className='buttons'>
            <button id='prevPage' onClick={ prevPage }>Anterior</button>
            <button id='nextPage' onClick={ nextPage }>Siguiente</button>
          </div>
        </footer>
    </>
    )
}



