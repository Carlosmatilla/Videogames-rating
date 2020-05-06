import api from '../../api/api'


export const getGames = () => async dispatch => {
    try {

        dispatch({ type: 'LOADING', payload: true })

        const response = await api.get()
      
        const { status } = response
        
        if (status === 200) {
           
            dispatch({ type: 'LOADING', payload: false })
            return dispatch({ type: 'GETGAMES', payload: response.data })

        } else {

            throw new Error("Unable to fetch games")

        }

    } catch (error) {

        dispatch({ type: 'ERROR', payload: error.message })

        setTimeout(() => {
            return dispatch({ type: 'CLEANERROR' })
        }, 8000)

    }
}