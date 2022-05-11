import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerResult: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  textResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  textLastResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#9b9b9b',
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
