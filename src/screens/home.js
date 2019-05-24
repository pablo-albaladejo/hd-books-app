import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import * as UserService from '../services/user';
import * as BookService from '../services/book';

import Icon from 'react-native-vector-icons/FontAwesome';

import BookItem from '../components/book/BookItem';

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

    BookService.getAllBooks().then(books => {
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

        <View style={{ zIndex: 1 }}>
          {this.state.books.map((book, index) => {
            return (
              <BookItem
                onPressCB={this.onBookPressed}
                key={'book_' + index.toString()}
                thumbnail={book.cover_url}
                author={book.author}
                title={book.title}
                description={book.description}
              />
            )
          })}
        </View>

        <TouchableOpacity onPress={
          () => this.props.navigation.navigate('Scanner')
        }>
          <Icon name="rocket" size={30} color="#900" />
          <Text>Scan a book</Text>
        </TouchableOpacity>

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
