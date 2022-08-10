export const SET_LANG = 'LANG/SET'

export const setLanguage = (langName) => {
    return {
        type: SET_LANG,
        payload: { langName },
    }
}
