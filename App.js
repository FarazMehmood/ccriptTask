import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Navigation/StackNavigation';
import { DataProvider } from './src/ContextApi/DataContext';
import { DataContextProvider } from './src/ContextApi/DataContext';
import dataStore from './src/MobX/AppStore';
import { Provider } from 'mobx-react';

export default function App() {
  const stores = {
    dataStore, // Add your store to the stores object
  };
  
  return (
    <DataContextProvider>
      <Provider {...stores}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </Provider>
    </DataContextProvider>
  );
}
