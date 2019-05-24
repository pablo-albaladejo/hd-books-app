import React, { Component } from 'react';
import { StyleSheet,Dimensions, Text, View, TouchableOpacity } from 'react-native';
import *  as BookService from '../services/book'

import BookCard from '../components/book/BookCard'
export default class Book extends Component {

    state = {
        book: null
    }

    componentDidMount() {

        BookService.getBookById(this.props.navigation.state.params.id)
            .then(book => {
                this.setState({
                    book
                })
            })

    }


    onLeasing = (user_id, book_id) => {
        BookService.leaseBook(user_id, book_id)
    }

    render() {
        const { book } = this.state;
        return (
            <View style={styles.container}>
              <View style={styles.background} />
                {book && (
                    <View style={{width: '90%', marginTop: 40}}>
                      <BookCard
                        author={book.author}
                        description={book.subtitle}
                        title={book.title}
                        thumbnail={book.cover_url}
                      />
                        <TouchableOpacity
                          onPress={() => this.onLeasing(1,1)}
                          style={styles.button}
                        >
                            <Text style={styles.caption}>{'Leasing'}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        )
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
    backgroundColor: '#353745',
    height: 60,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  caption: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 5,
    marginLeft: 10
  },
});
