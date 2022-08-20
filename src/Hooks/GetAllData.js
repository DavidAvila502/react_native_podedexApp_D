//Este modulo recibe el nombre de un pokemon y retorna todos los datos de ese pokemon en un objeto

import {useState} from 'react';

//Custom modules
import {getDataApi} from '../ApiRequests/ApiRequests';

const GetAllData = () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchPokemons = async name => {
    setResults({data: null, loading: true, error: null});

    let response = await getDataApi(
      'https://pokeapi.co/api/v2/pokemon/' + name,
    );

    if (response == false) {
      setResults({data: null, loading: false, error: 'Something went wrong'});
    } else {
      setResults({data: response, loading: false, error: null});
    }
  };
  return [results, searchPokemons];
};

export default GetAllData;
