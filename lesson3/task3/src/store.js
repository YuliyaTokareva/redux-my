import { createStore, combineReducers } from 'redux'
import { languageReduser } from './language.reducer'
import cartReduser from './cart.reducer'
import userReduser from './user.reducer'
const appReduser = combineReducers({
    counter: languageReduser,
    user: userReduser,
    cart: cartReduser,
})

const store = createStore(
    appReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
