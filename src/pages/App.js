/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as UserService from '../services/user'
import * as BookService from '../services/book'

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

        {this.state.books.map(book => {
          return (
            <Text>{book.title}</Text>
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
