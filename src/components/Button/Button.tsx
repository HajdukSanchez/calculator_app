import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string;
  color?: string;
}

export const Button = ({ text, color = '#9b9b9b' }: ButtonProps) => {
  const backgroundColor = color;

  return (
    <View style={{ ...styles.button, backgroundColor }}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: `300`,
  },
});
