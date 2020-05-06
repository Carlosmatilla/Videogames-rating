import { LOADING } from '../actions/actions-types'

const defaultState = false

export default function loading(state = defaultState, { type, payload }) {

    switch (type) {

        case LOADING: {
            
            return payload
        
        }
            
        default:
            return state;

    }
}

