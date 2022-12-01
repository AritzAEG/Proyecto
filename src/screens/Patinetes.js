import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import theme from '../styles/theme.js';
import themeContext from '../styles/themeContext.js';

const Patinetes = () => {
  const Patinetes = [
    {
      id: 1,
      name: 'Patinete 1',
      image: require('../media/patinete1.png'),
    },
    {
      id: 2,
      name: 'Patinete 2',
      image: require('../media/patinete2.png'),
    },
    {
      id: 3,
      name: 'Patinete 3',
      image: require('../media/patinete3.png'),
    },
  ];
  const theme = useContext(themeContext);
  const patinete = ( {item} ) => (
    <View style={[styles.item, {backgroundColor: theme.backgroundColor}]}>
      <View style={[styles.avatarContent, {backgroundColor: theme.backgroundColor}]}>
        <Image source={item.image} style={styles.avatar} />
    </View>
    <Text style={[styles.name, {color:theme.color}]}>{item.name}</Text>
    </View>
  )

  const headerComponent = () => {
    return <Text style={[styles.listHeadline, {color:theme.color}]}>Patinetes</Text>
  }

  const itemSeparator = () => {
    return <View style={[styles.separator, {color:theme.color}]} />
  }

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponentStyle = {styles.listHeader}
        ListHeaderComponent = {headerComponent}
        data = { Patinetes }
        renderItem = { patinete}
        ListEmptyComponent = {<Text>Prueba</Text>}
        ItemSeparatorComponent = {itemSeparator}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listHeadline: {
    color: '#333',
    fontSize: 31,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  avatarContent: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 55,
    width: 55,
  }, 
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  }
});

export default Patinetes;