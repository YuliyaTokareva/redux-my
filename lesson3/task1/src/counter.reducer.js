import { INCREMENT, DECREMENT, RESET } from './counter.actions'
const initialState = {
    counter: 0,
}
export const counterReduser = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: initialState.counter + 1,
            }
        case DECREMENT:
            return {
                ...state,
                counter: initialState.counter - 1,
            }
        case RESET:
            return {
                ...state,
                counter: 0,
            }
        default:
            return state
    }
}
