import React from 'react';

import { SafeAreaView, Image, View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { DATA } from './src/data';

const Item = ({ title , img}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.img}  source={img} />
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

