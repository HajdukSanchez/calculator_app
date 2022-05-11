import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { styles } from './src/theme/AppTheme';
import { CalculatorScreen } from './src/screens/Screens';

export const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      {/* Component for modify status bar of the phone */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
