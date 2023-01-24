import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import CursosScreen from '../screens/Cursos';

const Stack = createStackNavigator();

export default function CursosNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cursos"
        component={CursosScreen}
        options={{
            title: "Mis Cursos",
            headerTitleStyle: {
                textAlign: "center"
            },
        }}
      />
     </Stack.Navigator>
  );
}
