import { CITY_DATA_RECIVED } from './weather.actions'
const initialData = {
    cityData: null,
}
export const cityReducer = (state = initialData, action) => {
    switch (action.type) {
        case CITY_DATA_RECIVED: {
            return {
                ...state,
                cityData: action.payload.cityData,
            }
        }
        default:
            return state
    }
}
export default cityReducer
