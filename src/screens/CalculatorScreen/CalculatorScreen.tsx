import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../theme/AppTheme';
import { Button } from '../../components/Button/Button';
import { Numbers, Operators, SpecialCharacters, ButtonColor } from '../../enums/enums';

export const CalculatorScreen = () => {
  const [lastNumber, setLastNumber] = useState<string>(Numbers.ZERO);
  const [result, setResult] = useState<string>(Numbers.ZERO);
  const lastOperation = useRef<Operators>();

  const cleanNumber = () => {
    setResult(Numbers.ZERO);
    setLastNumber(Numbers.ZERO);
  };

  const createNumberFormat = (number: string) => {
    if (result.includes(SpecialCharacters.DOT) && number === SpecialCharacters.DOT) return; // Evaluate double dot
    if (result.startsWith(Numbers.ZERO) || number.startsWith(SpecialCharacters.MINUS_ZERO)) {
      // Evaluate if we are going to add a dot
      if (number === SpecialCharacters.DOT) {
        setResult(result + number);
        // Evaluate if is a deciaml number
      } else if (number === Numbers.ZERO && result.includes(SpecialCharacters.DOT)) {
        setResult(result + number);
        // If number is different from 0 are there is not dot, replace the initial cero
      } else if (number !== Numbers.ZERO && !result.includes(SpecialCharacters.DOT)) {
        setResult(number);
        // Avoid multiples ceros
      } else if (number === Numbers.ZERO && !result.includes(SpecialCharacters.DOT)) {
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
      if ((result.length === 2 && result.includes(SpecialCharacters.FILM_SCRIPT)) || result.length === 1) setResult(Numbers.ZERO);
    }
  };

  const positiveNegative = () => {
    result.includes(SpecialCharacters.FILM_SCRIPT)
      ? setResult(result.replace(SpecialCharacters.FILM_SCRIPT, ''))
      : setResult(SpecialCharacters.FILM_SCRIPT + result);
  };

  const setAction = (operation: String) => {
    switch (operation) {
      case Operators.ADDITION:
        lastOperation.current = Operators.ADDITION;
        break;
      case Operators.SUBTRACTION:
        lastOperation.current = Operators.SUBTRACTION;
        break;
      case Operators.MULTIPLICATION:
        lastOperation.current = Operators.MULTIPLICATION;
        break;
      case Operators.DIVISION:
        lastOperation.current = Operators.DIVISION;
        break;
      default:
        return;
    }
    result.endsWith(SpecialCharacters.DOT) ? setLastNumber(result.slice(0, -1)) : setLastNumber(result);
    setResult(Numbers.ZERO);
  };

  console.log('refactor');

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
        <Button text={SpecialCharacters.EQUAL} color={ButtonColor.ORANGE} onPress={setAction}></Button>
      </View>
    </View>
  );
};
