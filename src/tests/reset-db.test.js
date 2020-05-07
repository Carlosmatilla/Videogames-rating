import mockAxios from "axios"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { resetDb } from "../redux/actions/reset-db"
import { RESET} from '../redux/actions/actions-types'
const { random } = Math

const mockStore = configureMockStore([thunk])

describe("resetDb Action", () => {
    let store
    let game

    beforeEach(() => {
        store = mockStore({
            games: []
        })
        game = [{
            id: random(),
            name: `God of ${random()}`,
            url: `http-${random()}`,
            reviews: [5],
            average: 5
        }]
    })

    describe("RESET action creator", () => {
        it("dispatches RESET action and returns data on success", async () => {

            mockAxios.put.mockImplementationOnce(() =>
                Promise.resolve({
                    data: game,
                    status: 200
                })
            )

            await store.dispatch(resetDb(game))
            const actions = store.getActions()

            expect.assertions(3)
            expect(actions[0].type).toEqual(RESET)
            expect(actions[0].payload[0][0].reviews).toEqual([])
            expect(actions[0].payload[0][0].average).toEqual(0)

        })
    })
})
