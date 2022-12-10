import React, { useState, useEffect, useContext, useReducer } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import theme from '../styles/theme.js';
import themeContext from '../styles/themeContext.js';
import i18n from '../languages/i18n.js';
import SwitchSelector from 'react-native-switch-selector';
import { useTranslation } from 'react-i18next';
const options = [
  {label: 'Castellano', value: 'es'},
  {label: 'Euskara', value: 'eus'},
]

const Profile = () => {
  const {t, i18n} = useTranslation();
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
  const theme = useContext(themeContext);

  if (initializing) return null;
  
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SwitchSelector 
      options={options} 
      hasPadding initial={0} 
      onPress={(language) => {
        i18n.changeLanguage(language);
      }}
      />
      <Text style={[styles.Textitulo, {color:theme.color}]}>{t("Bienvenido")}</Text>
      <Text style={[styles.Textusuario, {color:theme.color}]}>{user.displayName}</Text>
      <Image source={{uri: user.photoURL}} style={styles.ProfileImage} />
      <Button title='Sign Out' onPress={signOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  View: {
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
    backgroundColor: 'white',
  },
  Textitulo: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 20,
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

export default Profile;