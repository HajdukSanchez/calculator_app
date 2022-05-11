import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../theme/AppTheme';
import { Button } from '../../components/Button/Button';

export const CalculatorScreen = () => {
  return (
    <View style={styles.containerResult}>
      <Text style={styles.textLastResult}>1550000</Text>
      <Text style={styles.textResult}>1550000</Text>
      <View>
        <Button></Button>
      </View>
    </View>
  );
};
