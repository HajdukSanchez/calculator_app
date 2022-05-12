import { useCallback, useRef, useState } from 'react';

import { Numbers, Operators, SpecialCharacters } from '../enums/enums';

export const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState<string>(Numbers.ZERO);
  const [result, setResult] = useState<string>(Numbers.ZERO);
  const lastOperation = useRef<Operators>();

  const cleanNumber = useCallback(() => {
    setResult(Numbers.ZERO);
    setLastNumber(Numbers.ZERO);
  }, []);

  const createNumberFormat = useCallback(
    (number: string) => {
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
    },
    [result],
  );

  const deleteNumber = useCallback(() => {
    if (result.length >= 1) {
      setResult(result.slice(0, -1));
      if ((result.length === 2 && result.includes(SpecialCharacters.FILM_SCRIPT)) || result.length === 1) setResult(Numbers.ZERO);
    }
  }, [result]);

  const positiveNegative = useCallback(() => {
    result.includes(SpecialCharacters.FILM_SCRIPT)
      ? setResult(result.replace(SpecialCharacters.FILM_SCRIPT, ''))
      : setResult(SpecialCharacters.FILM_SCRIPT + result);
  }, [result]);

  const setAction = useCallback(
    (operation: String) => {
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
    },
    [result, lastNumber],
  );

  const calculate = useCallback(() => {
    let operationResult: number | string = Numbers.ZERO;
    switch (lastOperation.current) {
      case Operators.ADDITION:
        operationResult = Number(lastNumber) + Number(result);
        break;
      case Operators.SUBTRACTION:
        operationResult = Number(lastNumber) - Number(result);
        break;
      case Operators.MULTIPLICATION:
        operationResult = Number(lastNumber) * Number(result);
        break;
      case Operators.DIVISION:
        // 'Result' has the divider when we click the action
        result === Numbers.ZERO ? (operationResult = SpecialCharacters.NAN) : (operationResult = Number(lastNumber) / Number(result));
        break;
      default:
        return;
    }
    setResult(operationResult.toString());
    setLastNumber(Numbers.ZERO);
  }, [result, lastNumber]);

  return {
    lastNumber,
    result,
    cleanNumber,
    createNumberFormat,
    deleteNumber,
    positiveNegative,
    setAction,
    calculate,
  };
};
