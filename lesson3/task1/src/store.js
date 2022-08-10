import { createStore, combineReducers } from 'redux'
import { counterReduser } from './counter.reducer'
import userReduser from './users.reducer'
const appReduser = combineReducers({
    counter: counterReduser,
    users: userReduser,
})

const store = createStore(
    appReduser,
    +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
