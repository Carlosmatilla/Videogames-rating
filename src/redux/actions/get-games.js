import api from '../../api/api'

// function delay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, 2000)
//     })
// }

export const getGames = () => async dispatch => {
    try {

        dispatch({ type: 'LOADING' })

        const response = await api.get()
      
        const { status } = response
        
        if (status === 200) {
           
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