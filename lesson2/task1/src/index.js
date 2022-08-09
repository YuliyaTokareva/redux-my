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
const initialState = {
    value: 0,
}
const counterReduser = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            }
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
