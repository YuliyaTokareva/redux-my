export const TOOGLE_OPTION = 'OPTION/TOOGLE'

export const toogleOption = (optionId) => {
    return {
        type: TOOGLE_OPTION,
        payload: { optionId },
    }
}
