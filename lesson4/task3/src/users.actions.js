export const NEXT_PAGE = 'PAGE/NEXT'
export const PREV_PAGE = 'PAGE/PREV'

export const nextPage = () => {
    return {
        type: NEXT_PAGE,
        //payload: { userData },
    }
}
export const prevPage = () => {
    return {
        type: PREV_PAGE,
        // payload: { userData },
    }
}
