import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { OrdersProvider } from './src/context/OrdersContext';

export default function App() {
  return (
    <OrdersProvider>
      <NavigationContainer>
        <NavigationApp />
      </NavigationContainer>
    </OrdersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});