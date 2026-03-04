import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { OrdersProvider } from './src/context/OrdersContext';
import NavigationApp from './src/navigation/NavigationApp'; 

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