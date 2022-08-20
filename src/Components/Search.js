// * BARRA DE BUSQUEDA *

import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({setType}) => {
  const [input, setInput] = useState('');

  let formalizeWord = word => {
    let re = new RegExp('[a-zA-z-0-9-]');

    let new_word = word.split('').filter(letter => {
      if (re.exec(letter)) {
        return letter;
      }
    });

    return new_word.join('');
  };

  const handleEndEditing = () => {
    if (input) {
      let perfect_word = formalizeWord(input);
      // console.log(perfect_word);
      setType(perfect_word);
      setInput('');
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.icono_container}>
        <Icon name="search" size={25} />
      </View>
      <TextInput
        style={styles.text}
        placeholder={'Enter type or pokemon'}
        value={input}
        onChangeText={text => setInput(text)}
        onEndEditing={() => handleEndEditing()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 25,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    borderColor: '#bbbbbb',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    elevation: 12,
    shadowOpacity: 0.7,
  },
  icono_container: {
    marginTop: 10,
    marginRight: 5,
  },
  text: {
    fontSize: 20,
  },
});

export default Search;
