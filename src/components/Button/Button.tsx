import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ButtonColor } from '../../enums/enums';

interface ButtonProps {
  text: string;
  color?: string;
  isBig?: boolean;
  onPress: (number: string) => void;
}

const Button = memo(function Button({
  text,
  onPress,
  isBig = false,
  color = ButtonColor.BLACK,
}: ButtonProps) {
  const containerStyle = {
    backgroundColor: color,
    width: !isBig ? 80 : 180,
    paddingLeft: !isBig ? 0 : 20,
  };
  const textColor: string = color === ButtonColor.GREY ? 'black' : 'white';
  const textAlign: 'center' | 'left' = !isBig ? 'center' : 'left';
	console.log(`Button ${text}`);

  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View style={{ ...styles.button, ...containerStyle }}>
        <Text
          style={{
            ...styles.buttonText,
            color: textColor,
            textAlign: textAlign,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export { Button };

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    height: 80,
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: `300`,
  },
});
