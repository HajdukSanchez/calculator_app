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
		marginBottom: 10,
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  textLastResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
