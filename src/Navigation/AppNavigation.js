//* COMPONENTE DE NAVEGACION  "(Menu lateral) */

import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/Home/HomeScreen';
import AboutScreen from '../Screens/About/AboutScreen';
import InfoPokemon from '../Screens/InfoPokemon/InfoPokemon';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigationRef} from '../RootNavigation/RootNavigation';
import s from './style';
import LoginScreen from '../Screens/Login/LoginScreen';

import {signOut, IsActive, dataUser} from '../Autentication/Autentication';
//**************************************** */
import {createStackNavigator} from '@react-navigation/stack';

//Items del menu Drawer
function ItemMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style={s.menuContainer}>
        <View style={s.iconoContainer}>
          <Icon size={25} name={props.iconName} color="#888888" />
        </View>
        <View style={s.tituloContainer}>
          <Text style={s.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// Funcion que retorna un menu con el contenido del drawer
function MenuDrawer(props) {
  const [dataU, getCurrentUser] = dataUser();
  useEffect(() => {
    getCurrentUser();
  }, [props]);

  return (
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image
              style={s.userImagen}
              source={require('../Images/PokeApiLogo/PokeApiLogo.png')}
            />
            <View style={s.camaraContainer}></View>
          </View>
          <View style={s.userNombre}>
            <Text style={s.userTitulo}>Powered by PokeApi</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ItemMenu
        iconName="home"
        titleName="Home"
        navigation={() => props.navigation.navigate('Home')}
      />
      <ItemMenu
        iconName="info-circle"
        titleName="About"
        navigation={() => props.navigation.navigate('About')}
      />
      <TouchableOpacity onPress={() => signOut()}>
        <View style={s.menuContainer}>
          <View style={s.iconoContainer}>
            <Icon2 size={25} name={'logout'} color="#888888" />
          </View>
          <View style={s.tituloContainer}>
            <Text style={s.tituloTxt}>{'Log-out'}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={s.BContainer}>
        <TouchableOpacity>
          <View style={s.BinfoContainer}>
            <View style={s.BuserContainer}>
              <Image
                style={s.BuserImagen}
                source={
                  dataU
                    ? dataU.user.photo
                      ? {uri: dataU.user.photo}
                      : require('../Images/User/user2.png')
                    : require('../Images/User/user2.png')
                }
              />
            </View>
            <View style={s.BuserNombre}>
              <Text style={s.BuserTitulo}>
                {dataU ? dataU.user.email : 'User'}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Control de Navegacion del drawer
const Drawer = createDrawerNavigator();
const AppDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuDrawer {...props} />}
      backBehavior={'history'}>
      <Drawer.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false, swipeEnabled: false}}
      />
      <Drawer.Screen
        name="InfoPokemon"
        component={InfoPokemon}
        options={{headerShown: false, swipeEnabled: false}}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{headerShown: false, swipeEnabled: false}}
      />
    </Drawer.Navigator>
  );
};

//********************** Implementando navegacion con stack.Screen ************************* */

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [response, isSignedIn] = IsActive();

  useEffect(() => {
    isSignedIn();
  }, []);

  if (response === '') {
    return <View></View>;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator backBehavior="none">
        <Stack.Screen
          name={response ? 'DrawerN' : 'Login'}
          component={response ? AppDrawerNavigation : LoginScreen}
          options={{headerShown: false, swipeEnabled: false}}
        />
        <Stack.Screen
          name={response ? 'Login' : 'DrawerN'}
          component={response ? LoginScreen : AppDrawerNavigation}
          options={{headerShown: false, swipeEnabled: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
