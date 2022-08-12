import { NEXT_PAGE, PREV_PAGE } from './users.actions'

const initialState = {
    currentPage: 0,
    // toIterate: 0,
    usersList: [],
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
                toIterate: state.toIterate + 3,
            }
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
                toIterate: state.toIterate - 3,
            }

        default:
            return state
    }
}
export default userReduser
