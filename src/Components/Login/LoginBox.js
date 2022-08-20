import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginBox = ({signIn}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Icon2 name="pokeball" size={20} style={{color: 'black'}} />
        <Text style={styles.title}> Login with </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.option_container}
          onPress={() => signIn()}>
          <View style={styles.option2}>
            <Icon1
              name="google"
              size={30}
              style={[styles.icons, {color: 'white'}]}
            />
            <Text style={styles.textStyle}>Gmail</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    elevation: 90,
    borderRadius: 20,
    borderWidth: 0.4,
    borderColor: 'gray',
    height: 250,
    width: 300,
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  option_container: {
    marginVertical: 10,
  },

  textStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginHorizontal: 20,
  },

  icons: {
    marginHorizontal: 7,
  },

  option2: {
    backgroundColor: '#df3b25',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    width: 250,
  },
});

export default LoginBox;
