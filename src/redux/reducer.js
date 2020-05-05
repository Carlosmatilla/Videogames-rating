import {games} from '../data'

const defaultState = games

function reducer(state = defaultState, { type, payload }) {

    switch (type) {

        case 'RATEGAMES': {
            console.log(payload)
            let newState = [...state]
            newState.forEach(game => {
                if (game.id === payload.id) {
                    game.reviews.push(payload.average)
                    game.average = ((game.reviews.reduce((a, b) => a += b)) / game.reviews.length).toFixed(1)
                }
            })
            return newState
        }

        default:
            return state;

    }
}

export default reducer;