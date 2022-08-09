import { createStore } from 'redux'
// const INCREMENT = 'COUNTER/INCREMENT'
// const DECREMENT = 'COUNTER/DECREMENT'
export const increment = () => {
    return {
        type: 'COUNTER/INCREMENT',
    }
}
export const decrement = () => {
    return {
        type: 'COUNTER/DECREMENT',
    }
}

const counterReduser = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
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
