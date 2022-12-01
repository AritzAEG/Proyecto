import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Switch} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../styles/themeContext.js';
import theme from '../styles/theme.js';

export default function Settings() {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color:theme.color}]}>Modo Oscuro / Dark Mode</Text>
      <Switch
        value={darkMode}
        onValueChange={(value) => { 
          setDarkMode(value);
          EventRegister.emit('ChangeTheme', value)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  }
});