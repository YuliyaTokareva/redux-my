import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './users/users.reducer'
const reducer = combineReducers({
    users: usersReducer,
})

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhansers(applyMiddleware(thunk)))

export default store
