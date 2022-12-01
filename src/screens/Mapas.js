import React, {useState, useEffect, useContext} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import theme from '../styles/theme.js';
import themeContext from '../styles/themeContext.js';

export default function Mapas() {
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 43.30505,
          longitude: -1.97281,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={{ latitude: 43.31004, longitude: -2.00271}}>
          <Callout>
            <Text>AEG</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});