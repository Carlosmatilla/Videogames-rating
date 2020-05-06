import getCall from '../../logic/get-call'
import { LOADING, GET_GAMES, ERROR, CLEAN_ERROR } from './actions-types'


export const getGames = () => async dispatch => {
    
    try {
        
        dispatch({ type: LOADING, payload: true })
        const games = await getCall()
        dispatch({ type: LOADING, payload: false })
        return dispatch({ type: GET_GAMES, payload: games })

    } catch (error) {

        dispatch({ type: ERROR, payload: error.message })
        setTimeout(() => {
            return dispatch({ type: CLEAN_ERROR })
        }, 8000)

    }
}