import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import { styles } from './src/utils/styles';
import Result from './src/components/Result';

export default function App() {
  const [capital, setCapital] = useState(0);
  const [interest, setInterest] = useState(0);
  const [months, setMonths] = useState(3);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMessage('Añade el interes del prestamos');
    } else if (!months) {
      setErrorMessage('Seleccióna los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace(',', '.'),
        totalPayable: (fee * months).toFixed(2).replace(',', '.'),
      });
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths} />
      </SafeAreaView>
      <Result
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage} />
      <Footer calculate={calculate} />
      <Footer></Footer>
    </>
  );
}
