import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, Image, View, Modal, Button, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <>
      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.banner}
              source={require('./src/img/bg.jpg')} />
          </View>
          <View style={StyleSheet.container}>
            <Text style={styles.titulo}>¿Que hacer en el Salvador?</Text>
            <ScrollView horizontal>
              <View>
                <Image
                  style={styles.cuidad}
                  source={require('./src/img/actividad1.jpg')} />

              </View>
              <View>
                <Image
                  style={styles.cuidad}
                  source={require('./src/img/actividad2.jpg')} />
              </View>
              <View>
                <Image
                  style={styles.cuidad}
                  source={require('./src/img/actividad3.jpg')} />
              </View>
              <View>
                <Image
                  style={styles.cuidad}
                  source={require('./src/img/actividad4.jpg')} />
              </View>
              <View>
                <Image
                  style={styles.cuidad}
                  source={require('./src/img/actividad5.jpg')} />
              </View>
            </ScrollView>

          </View>
        </View>

      </ScrollView>
      <Text style={styles.titulo}>Platillos Salvadoreños</Text>
      <View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/mejores1.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/mejores2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/mejores3.jpg')}
          />
        </View>
      </View>
      <Text style={styles.titulo}>RRutas Turisticas</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/ruta1.jpg')}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/ruta2.jpg')}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/ruta3.jpg')}
          />
        </View>
        <View style={styles.listaItem}>
          <Image
            style={styles.mejores}
            source={require('./src/img/ruta4.jpg')}
          />
        </View>
      </View>

    </>

  );
}


/*
        <View style={styles.container}>
          <View style={styles.container}>
            <View style={styles.caja1}></View>
            <View style={styles.caja2}></View>
            <View style={styles.caja3}></View>
            <View style={styles.caja4}></View>
          </View>
        </View>
 */

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  cuidad: {
    width: 250,
    height: 250,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
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
