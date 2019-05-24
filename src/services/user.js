import { getUser } from '../api/user'

export const getAllUsers = () => {
    return getUser({
        id: 'list'
    })
}