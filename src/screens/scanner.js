import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { NavigationActions, StackActions } from 'react-navigation';
export default class Scanner extends Component {

    onSuccess = (e) => {
        alert(e)
/*         const actions = [
            StackActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Home',
                    }),
                ]
            }),
            NavigationActions.navigate({
                routeName: 'Book',
                params: {
                    id: e.data,
                }
            })
        ];
        actions.forEach(this.props.navigation.dispatch); */
    }

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
            />
        )
    }
}