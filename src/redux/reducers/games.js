const defaultState = []

export default function games(state = defaultState, { type, payload }) {

    switch (type) {

        case 'GETGAMES': {
            return state.concat(payload)
        
        }

        case 'RATEGAMES': {
            return state.filter(g => g.id !== payload.id).concat(payload)
            
        }


        default:
            return state;

    }
}
