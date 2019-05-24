import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import *  as BookService from '../services/book'

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
        const fn = this.state.book.status === "0" ? BookService.leaseBook : BookService.unleaseBook;
        
        fn(user.email, this.state.book.book_id).then(() => {
            this.setState({
                status: book.status
            })
        })    
    }

    render() {
        const { book } = this.state;
        return (
            <View>
                {book && (
                    <View>
                        <TouchableOpacity onPress={this.updateLeasing}>
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