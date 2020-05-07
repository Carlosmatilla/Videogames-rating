import api from '../api/api'
import validate from '../utils/validate'

export default async function(game, average){


    validate(game, "object")
    validate(game.id, "number")
    validate(game.name, "string")
    validate(game.url, "string")
    validate(game.average, "number")
    validate(game.reviews, "object")
    validate(average, "number")

    const newGame = { ...game }

    newGame.reviews.push(average)

    newGame.average = Number(((newGame.reviews.reduce((a, b) => a += b)) / newGame.reviews.length).toFixed(1))
    
    const response = await api.update(newGame, newGame.id)
   
    const { status } = response

    if (status === 200) {

        return response.data

    } else {

        throw new Error("Unable to rate game")

    }
}