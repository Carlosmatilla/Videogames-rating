import rateCall from '../../logic/rate-call'
import { RATE_GAMES, ERROR, CLEAN_ERROR } from './actions-types'


export const rateGames = (game, average) => async dispatch => {

    try {
        
        const gameRated = await rateCall(game, average)
        return dispatch({ type: RATE_GAMES, payload: gameRated })

    } catch (error) {

        dispatch({ type: ERROR, payload: error })
        setTimeout(() => {
            return dispatch({ type: CLEAN_ERROR })
        }, 8000);
        
    }
}


