//* MODULO PARA REALIZAR PETICIONES A LA API*/

//******************* Hace una peticion a la url que le indiques ************ */
const getDataApi = async url => {
  try {
    let data = await axios.get(url);

    return data.data;
  } catch (error) {
    return false;
  }
};
//*********************  Encontrar coincedncias ********************* */

const getCoincidences = async param => {
  let response = await getDataApi(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126',
  );

  let Pokecoincidences = response.results.filter(item => {
    let coincidence = 0;

    if (item.name.includes(param)) {
      coincidence = 1;
    }

    if (coincidence != 0) {
      return item;
    }
  });

  return Pokecoincidences;
};

//********************* Retornar solo determinado tipo ***************** */

import axios from 'axios';
const Get_types = async type => {
  try {
    let response = await axios.get(
      'https://pokeapi.co/api/v2/type/' + type.toLowerCase(),
    );

    return response.data.pokemon;
  } catch (error) {
    return false;
  }
};

/**************************** RETORNAR COINCIDENCIAS ************************ */

const Get_pokemons = async param => {
  try {
    let response = await getCoincidences(param.toLowerCase());

    return response;
  } catch (error) {
    return false;
  }
};

export {Get_types, Get_pokemons, getDataApi};
