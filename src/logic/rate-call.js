import api from '../api/api'

export default async function(game, average){

    const newGame = { ...game }

    newGame.reviews.push(average)

    newGame.average = ((newGame.reviews.reduce((a, b) => a += b)) / newGame.reviews.length).toFixed(1)

    const response = await api.update(newGame, newGame.id)

    const { status } = response

    if (status === 200) {

        return response.data


    } else {

        throw new Error("Unable to rate game")

    }
}