import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../utils/colors';
import { styles, picketSelectStyles } from "../utils/styles";

export default function Form(props) {
    const { setCapital, setInterest, setMonths } = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={(e) => setInterest(e.nativeEvent.text)}
                />
            </View>
            <Picker
                style={picketSelectStyles}
                onValueChange={(value) => setMonths(value)}
                placeholder={{
                    label: 'Seleccióna los plazos...',
                    value: null,
                }}>
                <Picker.Item label="3 meses" value="3" />
                <Picker.Item label="6 meses" value="6" />
                <Picker.Item label="12 meses" value="12" />
                <Picker.Item label="24 meses" value="24" />
            </Picker>
        </View>
    );
}