import { SET_LANG } from './language.actions'
// const initialState = {
//     counter: 0,
// }
export const languageReduser = (state = 'en', action) => {
    switch (action.type) {
        case SET_LANG:
            return action.payload.langName

        default:
            return state
    }
}
