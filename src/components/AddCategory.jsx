import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
  
    const [ inputValue, setInputValue ] = useState('');

    // const onInputChange = (event) => {
    //     console.log( event.target.value );
    //     setInputValue( event.target.value );
    // }

    // puedes desestructurar el target del objeto event
    const onInputChange = ({ target }) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // preventDefault() evita el refresh del navegador al hacer submit
        event.preventDefault();
        // evitar inputs de 1 caracter o menos
        if( inputValue.trim().length <= 1 ) return;

        // actualizamos categories añadiendo inputValue al inicio de la lista
        // setCategories( categories => [ inputValue, ...categories ]);
        // para limpiar el input después de un submit
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        // No es necesario crear un fragmento porque form será el único elemento a regresar (si hubiera más de un elemento "principal" si es necesario)
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange ={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
  );
}
