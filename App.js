import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import 'expo-dev-client';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Header from './src/screens/Header.js';
import Menu from './Menu.js';
import i18n from './src/languages/i18n.js';

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId: '1095253030360-4dg852h8bvc3qetqkat38l7nq0k417tb.apps.googleusercontent.com',
  });

   // Handle user state changes
   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async() => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential)
    user_sign_in.then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    }) 
  }

  const signOut = async () =>
  {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.log(error);

    }
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.Container}>
        <Header />
        <GoogleSigninButton
          style={styles.GoogleSignin}
          onPress={onGoogleButtonPress}
        />
      </View>
    );
  }
  return (
    <Menu />
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ProfileImage: {
    height: 200,
    width: 200,
    borderRadius: 150,
    marginTop: 100,
    marginBottom: 100,
  },
  Textitulo: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  Textusuario: {
    fontSize: 20,
    fontWeight: 'bold',   
    paddingTop: 50,
  },
  GoogleSignin: {
    width: 300, 
    height: 65, 
    marginTop: 400,
  },
});
