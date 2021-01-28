import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Calculator({navigation}) {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const sum = () => {
    const sumResult = Number(firstNumber) + Number(secondNumber);
    setResult(sumResult);

    setHistory([...history, {
        key: history.length.toString(),
        calculation: firstNumber + " + " + secondNumber + " = " + sumResult
    }]);
    
    setFirstNumber('');
    setSecondNumber('');
  }

  const subtract = () => {
    const subtractResult = firstNumber - secondNumber;
    setResult(subtractResult);

    setHistory([...history, {
        key: history.length.toString(),
        calculation: firstNumber + " - " + secondNumber + " = " + subtractResult
    }]);

    setFirstNumber('');
    setSecondNumber('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{fontSize:30}}>Result: {result}</Text>
        <TextInput
          onChangeText={firstNumber => setFirstNumber(firstNumber)}
          value={firstNumber}
          keyboardType='numeric'
          style={styles.input}>
        </TextInput>
        <TextInput
          onChangeText={secondNumber => setSecondNumber(secondNumber)}
          value={secondNumber}
          keyboardType='numeric'
          style={styles.input}>
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
          <Button onPress={sum} title='+'/>
          <Button onPress={subtract} title='-'/>
          <Button onPress={() => navigation.navigate('History', {history: history})} title='HISTORY'/>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 25,
    height: 35,
    marginBottom: 5,
    paddingHorizontal:5,
    width: 200,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-around',
    width: 150,
  },
});
