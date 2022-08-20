//Este Hook toma una variable type la cual puede contener el nombre de un tipo o un pokemon
// dependiendo el contenido  retorna diferentes datos
//en caso de ser un tipo retorna un arreglo con los datos del nombre y la url de los pokemones asociados al tipo
//en caso de ser un pokemon devuelve en un arreglo los datos de ese pokemon

import {useState} from 'react';

//Custom modules
import {Get_types, Get_pokemons} from '../ApiRequests/ApiRequests';

const GetData = () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchTypesPokemons = async type => {
    setResults({data: null, loading: true, error: null});

    let response = await Get_types(type);

    if (response == false) {
      response = await Get_pokemons(type);

      response = response.map(item => {
        return {pokemon: item};
      });
    }

    if (response == false) {
      setResults({
        data: null,
        loading: false,
        error: 'Something went wrong',
      });
    } else {
      setResults({
        data: response,
        loading: false,
        error: null,
      });
    }
  };
  return [results, searchTypesPokemons];
};

export default GetData;
