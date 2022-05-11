import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../theme/AppTheme';
import { Button } from '../../components/Button/Button';

export const CalculatorScreen = () => {
  return (
    <View style={styles.containerResult}>
      <Text style={styles.textLastResult}>1550000</Text>
      <Text style={styles.textResult}>1550000</Text>
      <View style={styles.buttonsContainer}>
        <Button text="c" color="#9B9B9B"></Button>
        <Button text="+/-" color="#9B9B9B"></Button>
        <Button text="del" color="#9B9B9B"></Button>
        <Button text="/" color="#FF9427"></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="1"></Button>
        <Button text="2"></Button>
        <Button text="3"></Button>
        <Button text="x" color="#FF9427"></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="4"></Button>
        <Button text="5"></Button>
        <Button text="6"></Button>
        <Button text="-" color="#FF9427"></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="7"></Button>
        <Button text="8"></Button>
        <Button text="9"></Button>
        <Button text="+" color="#FF9427"></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text="0" isBig></Button>
        <Button text="."></Button>
        <Button text="=" color="#FF9427"></Button>
      </View>
    </View>
  );
};
