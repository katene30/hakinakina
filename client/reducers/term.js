const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TERM':
        return action.term
        default:
        return state
    }
}

export default reducer