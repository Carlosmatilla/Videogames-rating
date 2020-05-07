import games from "../redux/reducers/games"
import { RATE_GAMES, GET_GAMES, RESET } from '../redux/actions/actions-types'


describe("Games reducer", () => {
    const initialState = []


    it("returns the initial state correctly", () => {
        const reducer = games(undefined, {})

        expect(reducer).toEqual(initialState)
    })


    it("handles GETGAMES as expected", () => {
        const reducer = games(initialState, {
            type: GET_GAMES,
            payload: [{
                id: 2,
                url: "https://static.metacritic.com/images/products/games/5/40531eb3a9013197e4bf63dbfb866719-98.jpg",
                name: "Final Fantasy VII Remake",
                average: 0,
                reviews: []
            },
            {
                id: 3,
                url: "https://static.metacritic.com/images/products/games/6/1aabc829ea9aa79bd1a90fffa77eb0bf-98.jpg",
                name: "DOOM Eternal",
                average: 0,
                reviews: []
            }]


        })

        expect(reducer).toEqual([{
            id: 2,
            url: "https://static.metacritic.com/images/products/games/5/40531eb3a9013197e4bf63dbfb866719-98.jpg",
            name: "Final Fantasy VII Remake",
            average: 0,
            reviews: []
        },
        {
            id: 3,
            url: "https://static.metacritic.com/images/products/games/6/1aabc829ea9aa79bd1a90fffa77eb0bf-98.jpg",
            name: "DOOM Eternal",
            average: 0,
            reviews: []
        }])
    })

    it("handles RATEGAMES as expected", () => {
        const reducer = games(initialState, {
            type: RATE_GAMES,
            payload: [{
                id: 1,
                name: "Kingdom Hearts"
            }]
        })

        expect(reducer).toEqual([{
            id: 1,
            name: "Kingdom Hearts"
        }]
        )
    })

    it("handles RESET as expected", () => {
        const reducer = games(initialState, {
            type: RESET,
            payload: [{
                id: 2,
                url: "https://static.metacritic.com/images/products/games/5/40531eb3a9013197e4bf63dbfb866719-98.jpg",
                name: "Final Fantasy VII Remake",
                average: 0,
                reviews: []
            },
            {
                id: 3,
                url: "https://static.metacritic.com/images/products/games/6/1aabc829ea9aa79bd1a90fffa77eb0bf-98.jpg",
                name: "DOOM Eternal",
                average: 0,
                reviews: []
            }]


        })

        expect(reducer).toEqual([{
            id: 2,
            url: "https://static.metacritic.com/images/products/games/5/40531eb3a9013197e4bf63dbfb866719-98.jpg",
            name: "Final Fantasy VII Remake",
            average: 0,
            reviews: []
        },
        {
            id: 3,
            url: "https://static.metacritic.com/images/products/games/6/1aabc829ea9aa79bd1a90fffa77eb0bf-98.jpg",
            name: "DOOM Eternal",
            average: 0,
            reviews: []
        }])
    })

})
