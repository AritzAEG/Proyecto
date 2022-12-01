import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen ({navigation}) {

  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return(
    <View style={{
      flex: 1
    }}>
      <Image source={require('../media/fondopatinete.png')} resizMode="cover" style={styles.image}/>
      <Animated.View style={[styles.circle, { bottom: icon_1}]}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="scooter" color='white' size={25} onPress={() => navigation.navigate('Patinetes')}/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2}]}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="google-maps" color='white' size={25} onPress={() => navigation.navigate('Maps')}/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { right: icon_3}]}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="face-man-profile" color='white' size={25} onPress={() => navigation.navigate('Profile')}/>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
        <MaterialCommunityIcons name="plus" color='white' size={25} />
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  circle: {
     backgroundColor: 'black',
     width: 60,
     height: 60,
     position: 'absolute',
     bottom: 40,
     right: 40,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
  },
  image: {
    width: 400,
    height: 700,
    opacity: 0.5,
  }
})