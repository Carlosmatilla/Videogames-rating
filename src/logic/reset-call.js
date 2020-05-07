import api from '../api/api'

export default async function(games){
    
    const gamesUpdated = []
    const newGames = [...games]
    for (const game of newGames) {
        
        game.average = 0
        game.reviews = []
        const response = await api.update(game, game.id)
        gamesUpdated.push(response.data)
    }

    return gamesUpdated
}