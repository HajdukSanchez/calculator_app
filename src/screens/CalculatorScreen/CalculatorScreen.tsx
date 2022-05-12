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
    setResult(result + number);
  };

  return (
    <View style={styles.containerResult}>
      <Text style={styles.textLastResult}>{lastNumber}</Text>
      <Text style={styles.textResult} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={styles.buttonsContainer}>
        <Button text="c" color="#9B9B9B" onPress={cleanNumber}></Button>
        <Button text="+/-" color="#9B9B9B" onPress={cleanNumber}></Button>
        <Button text="del" color="#9B9B9B" onPress={cleanNumber}></Button>
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
