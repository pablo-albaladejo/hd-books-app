import { getBook } from '../api/book'

export const getAllBooks = () => {
    return getBook({
        id: 'list'
    })
}