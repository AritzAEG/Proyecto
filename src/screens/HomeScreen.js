import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
      <ImageBackground source={require('../media/fondopatinete.png')} />
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
  },
});

export default HomeScreen;