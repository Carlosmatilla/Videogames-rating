import store from '../store'
import randomGenerator from '../../utils/random-generator'
import rateCall from '../../logic/rate-call'
import { RANDOM, RATE_GAMES, ERROR, CLEAN_ERROR } from './actions-types'

export const callRandom = () => dispatch => {

    const { random } = store.getState()

    if (random === true) {

        return dispatch({ type: RANDOM, payload: false })

    } else {

        dispatch({ type: RANDOM, payload: true })
        return dispatch(rateRandom())

    }
}

export const rateRandom = () => async dispatch => {

    try {

        const { gameRandom, averageRandom } = await randomGenerator()

        const { games, random } = store.getState()
        const game = { ...games[gameRandom] }

        const gameRated = await rateCall(game, averageRandom)
        
        if (random === true) {
            dispatch({ type: RATE_GAMES, payload: gameRated })
            return dispatch(rateRandom())
        }

    } catch (error) {

        dispatch({ type: ERROR, payload: error })
        setTimeout(() => {
            return dispatch({ type: CLEAN_ERROR })
        }, 8000);
    }
}




