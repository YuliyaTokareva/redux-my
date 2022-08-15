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

const store = createStore(
    counterReduser,
    applyMiddleware(logger)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
