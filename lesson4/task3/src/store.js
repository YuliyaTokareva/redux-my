import { createStore, combineReducers } from 'redux'

import userReduser from './users.reducer'
const reducer = combineReducers({
    users: userReduser,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
