import { createStore } from 'redux'
import counterReduser from './users.reducer'

export const initialState = {
    usersList: [],
}

const store = createStore(counterReduser)

export default store
