import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import CursosNavigation from './CursosNavigation';
import HomeNavigation from './HomeNavigation';
import EjerciciosNavigation from './EjerciciosNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{ labelStyle: {fontSize: 14, marginBottom: 10, color: '#000'}, style: {height: 80, backgroundColor: '#DBF5FB'}}}
      initialRouteName="Home" >
      <Tab.Screen
        name="Cursos"
        component={CursosNavigation}
        options={{
          tabBarLabel: 'Cursos',
          headerShown: false,
          tabBarIcon: () => renderBook(),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: () => renderHome(),
        }}
      />
      <Tab.Screen
        name="Ejercicios"
        component={EjerciciosNavigation}
        options={{
          tabBarLabel: 'Ejercicios',
          headerShown: false,
          tabBarIcon: () => renderExercises(),
        }}
      />
    </Tab.Navigator>
  );
}

function renderBook() {
  return (
    <Image
      source={require('../assets/img2.png')}
      style={{width: 35, height: 35}}
    />
  );
}

function renderHome() {
  return (
    <Image
      source={require('../assets/img1.png')}
      style={{width: 35, height: 35}}
    />
  );
}

function renderExercises() {
  return (
    <Image
      source={require('../assets/img3.png')}
      style={{width: 35, height: 35}}
    />
  );
}
