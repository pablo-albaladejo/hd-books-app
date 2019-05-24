import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import * as UserService from '../services/user';
import * as BookService from '../services/book';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BookList from '../components/book/BookList';

export const user = {
    email: 'josegrobles1997@gmail.com'
}
export default class Home extends Component {

  state = {
    users: [],
    books: [],
  }

  componentDidMount() {

    UserService.getAllUsers().then(users => {
      this.setState({
        users
      })
    })

    BookService.getAllBooksById(user.email).then(books => {
      this.setState({
        books
      })
    })
  }

  onBookPressed = (id) => {
    this.props.navigation.navigate('Book', {
      id,
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.background} />

        <BookList
          customStyle={{ marginTop: SCREEN_HEIGHT / 10 }}
          item={this.state.books}
          onBookPressed={this.onBookPressed}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Scanner')}
          style={styles.button}
        >
          <Icon name="qrcode-scan" size={30} color="#900" />
          <Text style={styles.caption}>SCAN A BOOK</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#14977c',
    flex: 1,
    justifyContent: 'space-between'
  },

  background: {
    borderRightColor: 'transparent',
    borderRightWidth: SCREEN_WIDTH,
    borderTopColor: '#17ae8e',
    borderTopWidth: SCREEN_HEIGHT / 2,
    height: 0,
    position: 'absolute',
    top: 0,
    width: SCREEN_WIDTH,
    zIndex: 0,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'center',
    width: '100%',
  },

  caption: {
    color: '#17ae8e',
    fontSize: 20,
    letterSpacing: 5
  }
});
