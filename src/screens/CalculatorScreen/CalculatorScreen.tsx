import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../theme/AppTheme';
import { Button } from '../../components/Button/Button';

export const CalculatorScreen = () => {
  const [lastNumber, setLastNumber] = useState<string>('0');
  const [result, setResult] = useState<string>('0');

  const cleanNumber = () => {
    setResult('0');
  };

  const createNumberFormat = (number: string) => {
    if (result.includes('.') && number === '.') return; // Evaluate double dot
    if (result.startsWith('0') || number.startsWith('-0')) {
      // Evaluate if we are going to add a dot
      if (number === '.') {
        setResult(result + number);
        // Evaluate if is a deciaml number
      } else if (number === '0' && result.includes('.')) {
        setResult(result + number);
        // If number is different from 0 are there is not dot, replace the initial cero
      } else if (number !== '0' && !result.includes('.')) {
        setResult(number);
        // Avoid multiples ceros
      } else if (number === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + number);
      }
    } else {
      setResult(result + number);
    }
  };

  const deleteNumber = () => {
    if (result.length >= 1) {
      setResult(result.slice(0, -1));
      if ((result.length === 2 && result.includes('-')) || result.length === 1)
        setResult('0');
    }
  };

  const positiveNegative = () => {
    result.includes('-')
      ? setResult(result.replace('-', ''))
      : setResult('-' + result);
  };

  return (
    <View style={styles.containerResult}>
      <Text style={styles.textLastResult}>{lastNumber}</Text>
      <Text style={styles.textResult} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={styles.buttonsContainer}>
        <Button text="c" color="#9B9B9B" onPress={cleanNumber}></Button>
        <Button text="+/-" color="#9B9B9B" onPress={positiveNegative}></Button>
        <Button text="del" color="#9B9B9B" onPress={deleteNumber}></Button>
        <Button text="/" color="#FF9427" onPress={cleanNumber}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="1" onPress={createNumberFormat}></Button>
        <Button text="2" onPress={createNumberFormat}></Button>
        <Button text="3" onPress={createNumberFormat}></Button>
        <Button text="x" color="#FF9427" onPress={cleanNumber}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="4" onPress={createNumberFormat}></Button>
        <Button text="5" onPress={createNumberFormat}></Button>
        <Button text="6" onPress={createNumberFormat}></Button>
        <Button text="-" color="#FF9427" onPress={cleanNumber}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="7" onPress={createNumberFormat}></Button>
        <Button text="8" onPress={createNumberFormat}></Button>
        <Button text="9" onPress={createNumberFormat}></Button>
        <Button text="+" color="#FF9427" onPress={cleanNumber}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="0" onPress={createNumberFormat} isBig></Button>
        <Button text="." onPress={createNumberFormat}></Button>
        <Button text="=" color="#FF9427" onPress={cleanNumber}></Button>
      </View>
    </View>
  );
};
