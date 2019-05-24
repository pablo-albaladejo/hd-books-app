import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';

import styles from './styles';

import PropTypes from 'prop-types';

const Loading = ({ isLoading }) => (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading}
    >
        <View style={styles.container}>

            <ActivityIndicator size="large" />

        </View>
    </Modal>
)

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

export default Loading;