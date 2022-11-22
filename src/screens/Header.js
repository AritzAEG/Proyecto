import { View, Text, StyleSheet} from 'react-native'
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={styles.Text}>Bienvenido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    fontSize: 46,
    fontWeight: 'bold',
    paddingTop: 60,
  }
});

export default Header;