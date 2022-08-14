import React from 'react'
import { Provider } from 'react-redux'
// import Counter from './components/Counter.jsx'
import store from './store'
import TransferList from './options/TransferList'
const App = () => {
    return (
        <Provider store={store}>
            <TransferList />
        </Provider>
    )
}
export default App
