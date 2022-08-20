import axios from 'axios';
import {useState} from 'react';

const getDescriptionPokemon = () => {
  const [description, setDescription] = useState(false);

  const getDescription = async url => {
    try {
      let data = await axios.get(url);

      setDescription(data.data.flavor_text_entries[0].flavor_text);
    } catch (error) {
      setDescription(false);
    }
  };

  return [description, getDescription];
};

export default getDescriptionPokemon;
