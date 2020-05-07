import random from "../redux/reducers/random"
import { RANDOM } from '../redux/actions/actions-types'


describe("Random reducer", () => {
    const defaultState = false

    it("returns the initial state correctly", () => {
        const reducer = random(undefined, {})

        expect(reducer).toEqual(defaultState)
    })


    it("handles RANDOM as expected", () => {
        const reducer = random(defaultState, {
            type: RANDOM,
            payload: true
        })

        expect(reducer).toEqual(true)
    })


    it("handles RANDOM as expected", () => {
        const reducer = random(defaultState, {
            type: RANDOM,
            payload: false
        })

        expect(reducer).toEqual(false)
    })

})
