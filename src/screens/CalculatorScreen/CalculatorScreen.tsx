import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../theme/AppTheme';
import { Button } from '../../components/Button/Button';
import { useCalculator } from '../../hooks/useCalculator';
import { Numbers, Operators, SpecialCharacters, ButtonColor } from '../../enums/enums';

export const CalculatorScreen = () => {
  const { lastNumber, result, cleanNumber, createNumberFormat, deleteNumber, positiveNegative, setAction, calculate } = useCalculator();

  return (
    <View style={styles.containerResult}>
      {lastNumber !== Numbers.ZERO && <Text style={styles.textLastResult}>{lastNumber}</Text>}
      <Text style={styles.textResult} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={styles.buttonsContainer}>
        <Button text={SpecialCharacters.CLEAN} color={ButtonColor.GREY} onPress={cleanNumber}></Button>
        <Button text={SpecialCharacters.POSITIVE_NEGATIVE} color={ButtonColor.GREY} onPress={positiveNegative}></Button>
        <Button text={SpecialCharacters.DELETE} color={ButtonColor.GREY} onPress={deleteNumber}></Button>
        <Button text={Operators.DIVISION} color={ButtonColor.ORANGE} onPress={setAction}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text={Numbers.ONE} onPress={createNumberFormat}></Button>
        <Button text={Numbers.TWO} onPress={createNumberFormat}></Button>
        <Button text={Numbers.THREE} onPress={createNumberFormat}></Button>
        <Button text={Operators.MULTIPLICATION} color={ButtonColor.ORANGE} onPress={setAction}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text={Numbers.FOUR} onPress={createNumberFormat}></Button>
        <Button text={Numbers.FIVE} onPress={createNumberFormat}></Button>
        <Button text={Numbers.SIX} onPress={createNumberFormat}></Button>
        <Button text={Operators.SUBTRACTION} color={ButtonColor.ORANGE} onPress={setAction}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text={Numbers.SEVEN} onPress={createNumberFormat}></Button>
        <Button text={Numbers.EIGHT} onPress={createNumberFormat}></Button>
        <Button text={Numbers.NINE} onPress={createNumberFormat}></Button>
        <Button text={Operators.ADDITION} color={ButtonColor.ORANGE} onPress={setAction}></Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text={Numbers.ZERO} onPress={createNumberFormat} isBig></Button>
        <Button text={SpecialCharacters.DOT} onPress={createNumberFormat}></Button>
        <Button text={SpecialCharacters.EQUAL} color={ButtonColor.ORANGE} onPress={calculate}></Button>
      </View>
    </View>
  );
};
