import { ERROR, CLEAN_ERROR} from '../actions/actions-types'

const defaultState = null

function error(state = defaultState, { type, payload }) {

    switch (type) {

        case ERROR: {
            
            return payload
                
        }

        case CLEAN_ERROR: {
            
            return null
            
        }

        default:
            return state;

    }
}

export default error