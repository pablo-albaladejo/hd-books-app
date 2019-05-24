import { getBook, postBook } from '../api/book'

export const getAllBooks = () => {
    return getBook({
        id: 'list'
    })
}
export const getBookById = (id) => {
    return getBook({
        id,
    })
}

export const leaseBook = (user_id, book_id) => {
    return postBook({
        body: {
            user_id,
            book_id,
            status: 1
        }
    })
}


export const unleaseBook = (user_id, book_id) => {
    return postBook({
        body: {
            user_id,
            book_id,
            status: 1
        }
    })
}
