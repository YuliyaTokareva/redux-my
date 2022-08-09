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
        case 'COUNTER/INCREMENT':
            return state + 1
        case 'COUNTER/DECREMENT':
            return state - 1
        default:
            return state
    }
}

export const store = createStore(counterReduser)

// store.dispatch(incrementAction())
// console.log(store.getState())
// store.dispatch(increment())
// console.log(store.getState())
// store.dispatch(decrement())
// console.log(store.getState())

//export default store
