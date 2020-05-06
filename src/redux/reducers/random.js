import { RANDOM } from '../actions/actions-types'

const defaultState = false

export default function random(state = defaultState, { type, payload }) {

    switch (type) {

        case RANDOM: {
            return  payload
            
        }   

        default:
            return state;

    }
}

