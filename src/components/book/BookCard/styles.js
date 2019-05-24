import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    minHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    marginBottom: 25,
  },

  thumbnail: {
    height: 250,
    width: '100%'
  },

  noThumbnail: {
    backgroundColor: '#353745',
    height: 250,
    width: '100%'
  },

  content: {
    padding: 15,
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between'
  },

  title: {
    color: '#000',
    fontSize: 25,
    marginBottom: 5
  },

  description: {
    color: '#9B9B9B',
    fontSize: 15,
  },

  author: {
    color: '#AD807D'
  }
});
