import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen.js';
import Profile from './src/screens/Profile.js';
import Settings from './src/screens/Settings.js';
import Patinetes from './src/screens/Patinetes.js';
import Mapas from './src/screens/Mapas.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen 
        name="Maps" 
        component={Mapas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="google-maps" color={color} size={size} />
          )
        }} 
      />

      <Tab.Screen 
        name="Patinetes" 
        component={Patinetes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="scooter" color={color} size={size} />
          )
        }} 
      />

      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brightness-5" color={color} size={size} />
          )
        }} 
      />

    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
