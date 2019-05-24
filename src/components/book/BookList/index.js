import React from 'react';
import { ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles.js';

import BookItem from '../BookItem';

const BookList = ({ item, customStyle, onBookPressed }) => (
  <ScrollView testID="book-list-container" style={[styles.container, customStyle]}>
    {item.map((item, index) => {
      return (
        <BookItem
          onPressCB={onBookPressed}
          book_id={item.book_id}
          key={'book_' + index.toString()}
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
  customStyle: PropTypes.object,
  onBookPressed: PropTypes.func
}

export default BookList;