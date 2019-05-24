import React from 'react';
import { Text, View, Image } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles.js';

const BookItem = ({ isbn, thumbnail, title, description }) => (
  <View testID="book-item-container" style={styles.container}>
    <Image source={{ uri: thumbnail }} style={{ width: 50, height: 50 }}/>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.isbn}>{isbn}</Text>
      </View>
  </View>
)

BookItem.propTypes = {
  isbn: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default BookItem;