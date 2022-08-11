import React from 'react'
import { Provider } from 'react-redux'
// import Counter from './components/Counter.jsx'
import store from './store'
import Users from './Users.jsx'
const App = () => {
    return (
        <Provider store={store}>
            <Users />
        </Provider>
    )
}
export default App
