const defaultState = {
    games:[],
    error: false,
    errorMessage: null,
    isLoading: false
}

function reducers(state = defaultState, { type, payload }) {

    switch (type) {

        case 'GETGAMES': {
            return {
                ...state, 
                isLoading: false,
                games: state.games.concat(payload) 
            }
        }

        case 'RATEGAMES': {
            return {
                ...state, 
                games: state.games.filter(g => g.id !== payload.id).concat(payload)
            }
        }

        case 'ERROR': {
            
            return {
                ...state,
                error: true,
                errorMessage: payload
            }
        }

        case 'CLEANERROR': {
            return {
                ...state,
                error: false,
                errorMessage: null
            }
        }

        case 'LOADING': {
            return {
                ...state,
                isLoading: true
            }
        }

        default:
            return state;

    }
}

export default reducers