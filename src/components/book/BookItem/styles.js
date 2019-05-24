import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {  width: 0,  height: 1 },
    shadowOpacity: 0.1,
    marginBottom: 15,
    padding: 15
  },

  content: {
    marginLeft: 10
  },

  title: {
    color: '#000'
  },

  description: {
    color: '#9B9B9B'
  },

  isbn: {
    color: '#AD807D'
  }
});
