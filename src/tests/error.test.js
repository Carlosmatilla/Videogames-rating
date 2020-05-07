import error from "../redux/reducers/error"
import { ERROR, CLEAN_ERROR } from '../redux/actions/actions-types'


describe("Error reducer", () => {
    const defaultState = null

    it("returns the initial state correctly", () => {
        const reducer = error(undefined, {})

        expect(reducer).toEqual(defaultState)
    })

 
    it("handles ERROR as expected", () => {
        const reducer = error(defaultState, {
            type: ERROR,
            payload: "Fatal test error"
        })

        expect(reducer).toEqual("Fatal test error")
    })


    it("handles CLEAN_ERROR as expected", () => {
        const reducer = error(defaultState, {
            type: CLEAN_ERROR
        })

        expect(reducer).toEqual(null)
    })
    
})
