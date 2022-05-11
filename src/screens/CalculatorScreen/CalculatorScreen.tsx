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
        <Button text="c"></Button>
        <Button text="+/-" color="#ff9427"></Button>
        <Button text="del" color="#ff9427"></Button>
        <Button text="/" color="#2d2d2d"></Button>
      </View>
    </View>
  );
};
