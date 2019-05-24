import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import *  as BookService from '../services/book'
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
            <View>
                {book && (
                    <View>
                        <TouchableOpacity onPress={() => this.onLeasing(1,1)}>
                            <Text>{'Leasing'}</Text>
                        </TouchableOpacity>
                        <Text>
                            {'BOOK:' + JSON.stringify(book)}
                        </Text>
                    </View>
                )}
            </View>
        )
    }
}