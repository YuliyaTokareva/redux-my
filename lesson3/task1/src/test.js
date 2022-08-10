// import store from './store'
// import { addUser, deleteUser } from './users.reduser'
import { createStore } from 'redux'
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
export const initialState = {
    usersList: [],
}

const counterReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(action.payload),
            }
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter((user) => {
                    user.id !== action.payload
                }),
            }
        default:
            return state
    }
}
const store = createStore(counterReduser)

console.log(store.getState())
store.dispatch(addUser({ id: 76, name: 'Sarah' }))
console.log(store.getState())
store.dispatch(deleteUser(76))
console.log(store.getState())
