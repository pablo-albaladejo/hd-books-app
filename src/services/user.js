import { getUser } from '../api/user'

export const getAllUsers = () => {
    return getUser({
        id: 'list'
    })
}

export const getUserById = (id) => {
    return getUser({
        id
    })
}