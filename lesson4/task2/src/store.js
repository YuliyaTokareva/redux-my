import { createStore, combineReducers } from 'redux'
import { counterReduser } from './counter.reducer'
import userReduser from './users.reducer'
const reducer = combineReducers({
    users: userReduser,
    counter: counterReduser,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
