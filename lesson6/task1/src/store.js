import { createStore, applyMiddleware } from 'redux'
import { counterReduser } from './counter.reducer'
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.info('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    counterReduser,
    composeEnhansers(applyMiddleware(logger))

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
