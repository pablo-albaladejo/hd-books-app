import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {  width: 0,  height: 1 },
    shadowOpacity: 0.1,
    marginBottom: 15,
    padding: 15,
    width: '90%',
  },

  thumbnail: {
    maxHeight: 100,
    width: 60
  },

  noThumbnail: {
    backgroundColor: '#353745',
    maxHeight: 100,
    width: 60
  },

  content: {
    flex: 1,
    marginLeft: 10,
    minHeight: 100
  },

  title: {
    color: '#000',
    fontSize: 15
  },

  description: {
    color: '#9B9B9B'
  },

  author: {
    color: '#AD807D'
  }
});
