
export const rateGames = (id, average) => {

    return {
        type: 'RATEGAMES',
        payload: { id, average }
    }
}
