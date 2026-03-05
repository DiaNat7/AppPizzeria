import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import MenuPrincipal from "../screens/menuprincipal"; 
import NosotrosScreen from "../screens/nosotros"; 
import ClientesScreen from "../screens/clientes";
import OrdenarScreen from "../screens/ordenar";
import OrdenesScreen from "../screens/ordenes";
import MenuPizza from "../screens/menupizzas";

const Stack = createNativeStackNavigator();

export default function NavigationApp() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Menu" component={MenuPrincipal} />
      <Stack.Screen name="Nosotros" component={NosotrosScreen} />
      <Stack.Screen name="Clientes" component={ClientesScreen} />
      <Stack.Screen name="Ordenar" component={OrdenarScreen} />
      <Stack.Screen name="Ordenes" component={OrdenesScreen} />
      <Stack.Screen name="MenuPizz" component={MenuPizza} />
    </Stack.Navigator>
  );
}