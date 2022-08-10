import { createStore, combineReducers } from 'redux'
import { counterReduser } from './counter.reducer'
import userReduser from './users.reducer'
const appReduser = combineReducers({
    counter: counterReduser,
    users: userReduser,
})

const store = createStore(appReduser)

export default store
