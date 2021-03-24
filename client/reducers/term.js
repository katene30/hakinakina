const initialState = 0

const reducer = (state = initialState, action) => {
    console.log('reducer: ',action.term)
    switch (action.type) {
        case 'SAVE_TERM':
        return action.term
        default:
        return state
    }
}

export default reducer