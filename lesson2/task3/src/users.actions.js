export const ADD = 'USER/ADD'
export const DELETE = 'USER/DELETE'

export const addUser = (userInfo) => {
    return {
        type: ADD,
        payload: userInfo,
    }
}
export const deleteUser = (userId) => {
    return {
        type: DELETE,
        payload: userId,
    }
}
