import { getBook, postBook } from '../api/book'

export const getAllBooks = () => {
    return getBook({
        id: 'list'
    })
}

export const getAllBooksById = (id) => {
    return getBook({
        id: 'list',
        params: {
            email: id,
        }
    })
}

export const getBookById = (id) => {
    return getBook({
        id,
    })
}

export const leaseBook = (user_id, book_id) => {
    return postBook({
        id: book_id, 
        action: 'start',
        body: {
            userId: user_id,
            endDate: "2019-05-27"
        }
    })
}


export const unleaseBook = (user_id, book_id) => {
    return postBook({
        id: book_id, 
        action: 'end',
        body: {
            userId: user_id,
        }
    })
}
