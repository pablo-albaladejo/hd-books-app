import React from 'react';
import { ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles.js';

import BookItem from '../BookItem';

const BookList = ({ item, customStyle }) => (
  <ScrollView testID="book-list-container" style={[styles.container, customStyle]}>
    {item.map(item => {
      return (
        <BookItem
          thumbnail={item.cover_url}
          author={item.author}
          title={item.title}
          description={item.subtitle}
        />
      )
    })}
  </ScrollView>
)

BookList.propTypes = {
  item: PropTypes.array,
  customStyle: PropTypes.object
}

export default BookList;