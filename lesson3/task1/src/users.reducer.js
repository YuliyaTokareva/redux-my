import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions'

const initialState = {
    usersList: [],
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                usersList: state.usersList.concat(action.payload.userData),
            }
        case DELETE_USER:
            return {
                ...state,
                usersList: state.usersList.filter((user) => {
                    return user.id !== action.payload.userId
                }),
            }
        case UPDATE_USER: {
            const newList = state.usersList.map((user) => {
                if (user.id === action.payload.userId) {
                    return {
                        ...state,
                        ...action.payload.userData,
                    }
                }
            })
            return {
                ...state,
                usersList: newList,
            }
        }
        default:
            return state
    }
}
export default userReduser
