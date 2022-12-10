import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import theme from './src/styles/theme.js';
import themeContext from './src/styles/themeContext.js';
import { DefaultTheme } from 'react-native-paper';
import i18n from './src/languages/i18n.js';

import HomeScreen from './src/screens/HomeScreen.js';
import Profile from './src/screens/Profile.js';
import Settings from './src/screens/Settings.js';
import Patinetes from './src/screens/Patinetes.js';
import Mapas from './src/screens/Mapas.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Menu() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode]);
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarActiveTintColor: 'black',
              tabBarActiveBackgroundColor: 'white',
              tabBarInactiveBackgroundColor: 'white',
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
      </NavigationContainer>
    </themeContext.Provider>
    
  );
}