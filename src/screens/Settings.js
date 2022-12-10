import React, {useState, useContext, useTransition} from 'react';
import { View, Text, StyleSheet, Switch} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../styles/themeContext.js';
import theme from '../styles/theme.js';
import i18n from '../languages/i18n.js';
import SwitchSelector from 'react-native-switch-selector';
import { useTranslation } from 'react-i18next';
const options = [
  {label: 'Castellano', value: 'es'},
  {label: 'Euskara', value: 'eus'},
]

export default function Settings() {
  const {t, i18n} = useTranslation();
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SwitchSelector 
      options={options} 
      hasPadding initial={0} 
      onPress={(language) => {
        i18n.changeLanguage(language);
      }}
      />
      <Text style={[styles.text, {color:theme.color}]}>{t("Modo Oscuro")}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 40,
  }
});