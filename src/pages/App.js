/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as UserService from '../services/user';
import * as BookService from '../services/book';

import BookItem from '../components/book/BookItem';

type Props = {};
export default class App extends Component<Props> {


  state = {
    users: [],
    books: [],
  }

  componentDidMount(){

    UserService.getAllUsers().then(users => {
      this.setState({
        users
      })
    })

    BookService.getAllBooks().then(books => {
      this.setState({
        books
      })
    })
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.background}/>
        <View style={{zIndex: 1}}>
          {this.state.books.map(book => {
            return (
              <BookItem
                thumbnail={book.cover_url}
                author={book.author}
                title={book.title}
                description={book.description}
              />
            )
          })}
          </View>
      </View>
    );
  }
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    zIndex: 0,
    width: SCREEN_WIDTH,
    height: 0,
    borderTopColor: '#17ae8e',
    borderTopWidth: SCREEN_HEIGHT / 2,
    borderRightWidth: SCREEN_WIDTH,
    borderRightColor: 'transparent',
    top: 0
  },
});
