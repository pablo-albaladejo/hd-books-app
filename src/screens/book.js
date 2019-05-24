import React, { Component } from 'react';
import { StyleSheet,Dimensions, Text, View, TouchableOpacity } from 'react-native';
import *  as BookService from '../services/book'

import BookCard from '../components/book/BookCard'
//TODO: TO BE REOMVED WHEN REDUX
import { user } from './home'
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


    updateLeasing = () => {
        const fn = this.state.book.status === '0' ? BookService.leaseBook : BookService.unleaseBook;
        
        fn(user.email, this.state.book.book_id).then(() => {
            alert('Success!!')
            this.setState({
                book: {
                    ...this.state.book,
                    status: this.state.book.status
                }
            })
        }).catch(err => {
            alert(JSON.stringify(err))
        })    
    }

    render() {
        const { book } = this.state;
        return (
            <View style={styles.container}>
              <View style={styles.background} />
                {book && (
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                      <View style={{ width: '93%', marginTop: 40 }}>
                        <BookCard
                          book_id={book.book_id}
                          author={book.author}
                          description={book.subtitle}
                          title={book.title}
                          thumbnail={book.cover_url}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={this.updateLeasing}
                        style={styles.button}
                      >
                        <Text style={styles.caption}>{book.status === "0" ? 'LEASE' : 'UNLEASE'}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
            </View>
        )
    }
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#353745',
    flex: 1,
    justifyContent: 'space-between'
  },

  background: {
    borderRightColor: 'transparent',
    borderRightWidth: SCREEN_WIDTH,
    borderTopColor: '#353745',
    borderTopWidth: SCREEN_HEIGHT / 2,
    height: 0,
    position: 'absolute',
    top: 0,
    width: SCREEN_WIDTH,
    zIndex: 0,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#17ae8e',
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    width: SCREEN_WIDTH
  },

  caption: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 5,
    marginLeft: 10
  },
});
