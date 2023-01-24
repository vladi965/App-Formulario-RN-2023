import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import EjerciciosScreen from '../screens/Ejercicios';

const Stack = createStackNavigator();

export default function EjerciciosNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ejercicios"
        component={EjerciciosScreen}
        options={{
            title: "Ejercicios",
            headerTitleStyle: {
                textAlign: "center"
            },
        }}
      />
     </Stack.Navigator>
  );
}
