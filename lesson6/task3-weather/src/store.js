import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import cityReducer from './weather/weather.reducer'
const reducer = combineReducers({
    wether: cityReducer,
})
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhansers(applyMiddleware(thunk)))

export default store
