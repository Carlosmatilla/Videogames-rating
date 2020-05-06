const defaultState = null

function error(state = defaultState, { type, payload }) {

    switch (type) {

        case 'ERROR': {
            
            return payload
                
        }

        case 'CLEANERROR': {
            
            return null
            
        }

        default:
            return state;

    }
}

export default error