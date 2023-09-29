import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  caja1: {
    padding: 20,
    backgroundColor: 'navy',
    flex: 1
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
    flex: 1
  },
  caja3: {
    padding: 20,
    backgroundColor: 'green',
    flex: 1
  },
  caja4: {
    padding: 20,
    backgroundColor: 'teal',
    flex: 2
  }

});
