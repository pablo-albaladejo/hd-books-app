import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Book extends Component {

    render() {
        return (
            <Text>{'BOOK:' + this.props.navigation.state.params.id}</Text>
        )
    }
}