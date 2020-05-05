import reducers from "./reducers"
describe("Reducers", () => {
    const initialState = {
        games: [],
        error: false,
        errorMessage: null,
        isLoading: false
    }

    it("returns the initial state correctly", () => {
        const reducer = reducers(undefined, {})

        expect(reducer).toEqual(initialState)
    })

    it("handles GETGAMES as expected", () => {
        const reducer = reducers(initialState, {
            type: "GETGAMES",
            payload: {
                id: 1,
                name: "Mario Bros"
            }


        })

        expect(reducer).toEqual({
            games: [{
                id: 1,
                name: "Mario Bros"
            }],
            error: false,
            errorMessage: null,
            isLoading: false


        })
    })

    it("handles RATEGAMES as expected", () => {
        const reducer = reducers(initialState, {
            type: "RATEGAMES",
            payload: [{
                    id: 1,
                    name: "Kingdom Hearts"
            }]
        })

        expect(reducer).toEqual({
            games: [{
                    id: 1,
                    name: "Kingdom Hearts"
            }],
            error: false,
            errorMessage: null,
            isLoading: false


        })
    })
    it("handles ERROR as expected", () => {
        const reducer = reducers(initialState, {
            type: "ERROR",
            payload: "error"
        })

        expect(reducer).toEqual({
            games: [],
            error: true,
            errorMessage: "error",
            isLoading: false


        })
    })
    it("handles CLEANERROR as expected", () => {
        const reducer = reducers(initialState, {
            type: "CLEANERROR"
        })

        expect(reducer).toEqual({
            games: [],
            error: false,
            errorMessage: null,
            isLoading: false
        })
    })
    it("handles LOADING as expected", () => {
        const reducer = reducers(initialState, {
            type: "LOADING"
        })

        expect(reducer).toEqual({
            games: [],
            error: false,
            errorMessage: null,
            isLoading: true

        })
    })
    
})
