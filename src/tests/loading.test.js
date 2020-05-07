import loading from "../redux/reducers/loading"
import { LOADING } from '../redux/actions/actions-types'


describe("Loading reducer", () => {
    const defaultState = false

    it("returns the initial state correctly", () => {
        const reducer = loading(undefined, {})

        expect(reducer).toEqual(defaultState)
    })

 
    it("handles LOADING as expected", () => {
        const reducer = loading(defaultState, {
            type: LOADING,
            payload: true
        })

        expect(reducer).toEqual(true)
    })


    it("handles LOADING as expected", () => {
        const reducer = loading(defaultState, {
            type: LOADING,
            payload: false
        })

        expect(reducer).toEqual(false)
    })
})
