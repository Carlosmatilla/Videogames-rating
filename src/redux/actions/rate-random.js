import store from '../store'
import delay from '../../utils/delay'
const { floor, random } = Math


export const callRandom = () => dispatch => {

    const { random } = store.getState()

    if (random === true) {

        return dispatch({ type: 'RANDOM', payload: false })

    } else {

        dispatch({ type: 'RANDOM', payload: true })
        return dispatch(rateRandom())

    }
}

export const rateRandom = () => async dispatch => {

    try {

        const gameRandom = floor(random() * 18)
        const averageRandom = floor(random() * 5) + 1
        const timeRandom = floor(random() * 4000)

        await delay(timeRandom)

        const currentState = store.getState()
        
        const newGame = { ...currentState.games[gameRandom] }
        console.log(newGame)
        newGame.reviews.push(averageRandom)
        newGame.average = ((newGame.reviews.reduce((a, b) => a += b)) / newGame.reviews.length).toFixed(1)

        if (currentState.random === true) {

            dispatch({ type: 'RATEGAMES', payload: newGame })
            return dispatch(rateRandom())

        }

    } catch (error) {

        dispatch({ type: 'ERROR', payload: error })
        setTimeout(() => {
            return dispatch({ type: 'CLEANERROR' })
        }, 8000);

    }
}




