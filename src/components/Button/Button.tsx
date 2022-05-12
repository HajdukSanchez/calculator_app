import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
  color = '#2D2D2D',
}: ButtonProps) {
  const containerStyle = {
    backgroundColor: color,
    width: !isBig ? 80 : 180,
    paddingLeft: !isBig ? 0 : 20,
  };
  const textColor: string = color === '#9B9B9B' ? 'black' : 'white';
  const textAlign: 'center' | 'left' = !isBig ? 'center' : 'left';

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
