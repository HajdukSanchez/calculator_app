import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../theme/AppTheme';

export const Button = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>1</Text>
    </View>
  );
};
