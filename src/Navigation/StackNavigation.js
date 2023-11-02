import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hooks from '../Screen/HookScreen/Hooks';
import MobX from '../Screen/HomeScreen/MobX';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'green', 
          },
          tabBarLabelStyle: {
            fontSize: 16, 
            color:'white'
          },
        }}
      >
        <Tab.Screen
          name="Hooks"
          component={Hooks}
          options={{ tabBarIcon: () => null,  headerShown: false, }}
        />
        <Tab.Screen
          name="MobX"
          component={MobX}
          options={{ tabBarIcon: () => null, headerShown: false, }}
        />
      </Tab.Navigator>
  );
};

export default AppNavigator;
