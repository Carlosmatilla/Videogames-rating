import resetCall from '../../logic/reset-call'
import { RESET, ERROR, CLEAN_ERROR } from './actions-types'


export const resetDb = (games) => async dispatch => {
    
    try {

        const gamesUpdated = await resetCall(games)
        return dispatch({ type: RESET, payload: gamesUpdated })

    } catch (error) {

        dispatch({ type: ERROR, payload: error.message })
        setTimeout(() => {
            return dispatch({ type: CLEAN_ERROR })
        }, 8000)

    }
}