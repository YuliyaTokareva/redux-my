import { createStore } from 'redux'
const INCREMENT = 'COUNTER/INCREMENT'
const DECREMENT = 'COUNTER/DECREMENT'
export const increment = () => {
    return {
        type: INCREMENT,
    }
}
export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

const counterReduser = (store = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return store + 1
        case DECREMENT:
            return store - 1
        default:
            return store
    }
}

const store = createStore(counterReduser)

// store.dispatch(increment())
// console.log(store.getState())
// store.dispatch(increment())
// console.log(store.getState())
// store.dispatch(decrement())
// console.log(store.getState())

export default store
