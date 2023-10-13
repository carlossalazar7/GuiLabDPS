import React, { useState } from "react";
import { Text, TexInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'


const Formulario = ({ busqueda, guardarbusqueda, guardarConsultar }) => {
    const { pais } = busqueda;
    const [animacionboton] = useState(new Animated.Value(1))

    const consultarPais = () => {
        if(pais.strim()=== ''){
            mostrarAlerta()
            return;
        }
        //consultar api
        guardarConsultar(true)
    }

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Debe seleccionar un pais', [{Text: ' Entendido'}]);
    }

    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: 0.7,
            useNativeDriver: true,
            duration: 500,
        }).start();
    }

    
    const animacionSalida = () => {
        Animated.spring(animacionboton, {
            toValue: 1,
            useNativeDriver: true,
            duration: 500,
        }).start();
    }

     const estiloAnimacion = {
        transform: [
            {
                scale: animacionboton
            }
        ]
     };

    return (
        <>
            <View>
                <View>
                    <Text style={StyleSheet.input}>Pais</Text>
                </View>
                <View>
                    <Picker
                        style={styles.itempais}
                        selectedValue={pais}
                        onValueChange={pais => guardarbusqueda({ ...busqueda, pais })}
                        onPress={() => consultarPais()}
                    >
                        <Picker.Item label="--seleccione un pais --" value="" />
                        <Picker.Item label="Canada" value="ca" />
                        <Picker.Item label="El Salvador" value="sv" />
                        <Picker.Item label="Guatemala" value="gt" />
                        <Picker.Item label="Honduras" value="hn" />
                        <Picker.Item label="Nicaragua" value="ni" />
                        <Picker.Item label="Panama" value="pa" />
                        <Picker.Item label="Costa Rica" value="cr" />
                        <Picker.Item label="México" value="mx" />
                        <Picker.Item label="Argentina" value="ar" />
                        <Picker.Item label="Estados Unidos" value="us" />
                        <Picker.Item label="Colombia" value="co" />
                        <Picker.Item label="España" value="es" />
                        <Picker.Item label="Perú" value="pe" />
                    </Picker>
                    <TouchableWithoutFeedback
                        onPressIn={() => animacionEntrada()}
                        onPressOut={() => animacionSalida()}
                        onPress={() => consultarPais()}
                    >
                        <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                            <View style={styles.btnBuscar}>
                                <Text style={styles.textoBuscar}>Buscar País</Text>
                            </View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    itempais: {
        height: 60,
        backgroundColor: '#fff'
    },
    btnBuscar: {
        marginTop: 20,
        height: 50,
        backgroundColor: '#000',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'

    },
    textoBuscar: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})

export default Formulario;