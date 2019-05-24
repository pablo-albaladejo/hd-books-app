/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import BookItem from '../components/book/BookItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const books = [
  {
    isbn: 1,
    thumbnailUrl: 'https://image.flaticon.com/icons/png/128/1024/1024218.png',
    title: 'title',
    description: 'description'
  },
  {
    isbn: 2,
    thumbnailUrl: 'https://image.flaticon.com/icons/png/128/1024/1024218.png',
    title: 'title',
    description: 'description'
  },
  {
    isbn: 3,
    thumbnailUrl: 'https://image.flaticon.com/icons/png/128/1024/1024218.png',
    title: 'title',
    description: 'description'
  }
]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {books.map(book => {
          return(
            <BookItem 
              thumbnail={book.thumbnailUrl}
              isbn={book.isbn}
              title={book.title}
              description={book.description}
            />
          )
        })}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
