const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_LOGS':
        return action.logs
        default:
        return state
    }
}

export default reducer