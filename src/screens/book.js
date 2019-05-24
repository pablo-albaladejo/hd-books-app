import React, { Component } from 'react';
import { Text, View } from 'react-native';
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

    render() {
        const { book } = this.state;
        return (
            <View>
                {book && (
                    <Text>
                        {'BOOK:' + JSON.stringify(book)}
                    </Text>
                )}
            </View>
        )
    }
}