import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import MenuPizzas from "../screens/MenuPizzas"; 
import NosotrosScreen from "../screens/NosotrosScreen"; 
import ClientesScreen from "../screens/ClientesScreen";
import OrdenarScreen from "../screens/OrdenarScreen";
import OrdenesScreen from "../screens/OrdenesScreen";
import PizzaScreen from "../screens/PizzaScreen"; 

const Stack = createNativeStackNavigator();

export default function NavigationApp() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Menu" component={MenuPizzas} />
      <Stack.Screen name="Nosotros" component={NosotrosScreen} />
      <Stack.Screen name="Clientes" component={ClientesScreen} />
      <Stack.Screen name="Ordenar" component={OrdenarScreen} />
      <Stack.Screen name="Ordenes" component={OrdenesScreen} />
      <Stack.Screen name="Pizzas" component={PizzaScreen} />
    </Stack.Navigator>
  );
}