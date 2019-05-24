import React from 'react';
import { Text, View, Image } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles.js';

const BookCard = ({ book_id, onPressCB, author, thumbnail, title, description, }) => (
  <View
    testID="book-item-container"
    style={styles.container}
    onPress={() => onPressCB(book_id)}
  >
    {!thumbnail && <View style={styles.noThumbnail} />}
    {thumbnail && <Image source={{ uri: thumbnail }} style={styles.thumbnail} />}
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.author}>{author}</Text>
    </View>
  </View>
)

BookCard.propTypes = {
  onPressCB: PropTypes.func.isRequired,
  book_id: PropTypes.string.isRequired,
  author: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default BookCard;