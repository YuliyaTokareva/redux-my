export const CITY_DATA_RECIVED = 'CITY_DATA_RECIVED'
import { getCityData } from './weather.gateway'
export const cityDataRecived = (cityData) => {
    return {
        type: CITY_DATA_RECIVED,
        payload: {
            cityData,
        },
    }
}
export const getWatherData = () => {
    return function (dispatch) {
        getCityData().then((cityData) => {
            dispatch(cityDataRecived(cityData))
        })
    }
}
