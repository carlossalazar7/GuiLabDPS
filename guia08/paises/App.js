import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Formulario from './src/components/Formulario';
import Pais from './src/components/Pais'; 

export default function App() {
  const [busqueda, guardarbusqueda] = useState({ pais: '', })
  const [consultar, guardarResultado] = useState({});
  const [resultado, guardarConsultar] = useState(false);
  
useEffect (() => {
  const {pais} = busqueda;
  const consultarPais = async () => {
    if(consultar){
      const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
      } catch (error) {
        mostrarAlert();
      }
    }
  }
  consultarPais();
}, [consultar]);

const mostrarAlert = () =>{
    Alert.alert('Error', 'No hay resultados intente con otra cuidad o pais'), [{Text: 'OKR'}]
}

  return (
    <View style={styles.app}>
      <StatusBar style='auto'>
        <View style={styles.contenido}>
          <Formulario
            busqueda={busqueda}
            guardarbusqueda={guardarbusqueda} 
            guardarConsultar={guardarConsultar}
            />
            <Pais resultado={resultado} />
        </View>
      </StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center'
  },
  contenido: {
    margin: '2.5%'
  }
});
