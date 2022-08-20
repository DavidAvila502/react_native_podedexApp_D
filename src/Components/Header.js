import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
const Header = ({props}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon name="menu" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>PokéDex</Text>
      </View>
      <View>
        <Image
          source={require('../Images/LogoApp/pokebola_logo.png')}
          style={styles.image_styles}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#bbbbbb',
    backgroundColor: '#D9042B',
  },
  title: {
    fontFamily: 'Pokemon Solid',
    fontSize: 30,
    marginLeft: 75,
    marginRight: 10,
    color: 'white',
  },
  image_styles: {
    height: 40,
    width: 40,
  },
});

export default Header;
