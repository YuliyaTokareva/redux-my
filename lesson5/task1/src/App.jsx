import React from 'react'
import { Provider } from 'react-redux'
// import Counter from './components/Counter.jsx'
import store from './store'
import UsersList from './UsersList.jsx'
const App = () => {
    return (
        <Provider store={store}>
            <UsersList />
        </Provider>
    )
}
export default App
