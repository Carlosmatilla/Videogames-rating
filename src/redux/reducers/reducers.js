const defaultState = {
    games:[],
    error: null,
    isLoading: false,
    random: false
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
                error: payload,
                
            }
        }

        case 'CLEANERROR': {
            return {
                ...state,
                error: null
            }
        }

        case 'LOADING': {
            return {
                ...state,
                isLoading: payload
            }
        }

        case 'RANDOM': {
            return {
                ...state,
                random: payload
            }
        }

            

        default:
            return state;

    }
}

export default reducers