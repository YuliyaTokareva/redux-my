import { ADD, DELETE } from './users.actions'
import { initialState } from './store'

const counterReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(action.payload),
            }
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter((user) => {
                    return user.id !== action.payload
                }),
            }
        default:
            return state
    }
}
export default counterReduser
