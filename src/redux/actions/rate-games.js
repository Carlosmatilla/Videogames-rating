
import api from "../../api/api"

export const rateGames = (game, average) => async dispatch => {

    try {
        
        const newGame = { ...game }

        newGame.reviews.push(average)

        newGame.average = ((newGame.reviews.reduce((a, b) => a += b)) / newGame.reviews.length).toFixed(1)

        const response = await api.update(newGame, newGame.id)

        const { status } = response

        if (status === 200) {

            return dispatch({ type: 'RATEGAMES', payload: response.data })

        } else {

            throw new Error("Unable to rate game")

        }

    } catch (error) {

        dispatch({ type: 'ERROR', payload: error })
        setTimeout(() => {
            return dispatch({ type: 'CLEANERROR' })
        }, 8000);
        
    }
}


