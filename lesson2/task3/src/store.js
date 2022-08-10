import { createStore } from 'redux'
import counterReduser from './users.reduser'
export const initialState = {
    userList: [],
}

const store = createStore(counterReduser)

export default store
