import mockAxios from "axios"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { rateGames } from "../redux/actions/rate-games"
import { RATE_GAMES, ERROR } from '../redux/actions/actions-types'
const { random } = Math

const mockStore = configureMockStore([thunk])

describe("rateGames Action", () => {
  let store
  const game = {
    id: random(),
    name: `God of ${random()}`,
    url: `http-${random()}`,
    reviews: [5],
    average: 5
  }
  const average = random()

  beforeEach(() => {
    store = mockStore({
      games: []
    })
  })

  describe("rateGames action creator", () => {
    it("dispatches RATEGAMES action and returns data on success", async () => {

      mockAxios.put.mockImplementationOnce(() =>
        Promise.resolve({
          data: game,
          status: 200
        })
      )

      await store.dispatch(rateGames(game, average))
      const actions = store.getActions()

      expect.assertions(1)
      expect(actions[0].type).toEqual(RATE_GAMES)

    })

    it("tests RATEGAMES action and that returns an error", async () => {
      mockAxios.put.mockImplementationOnce(() =>
        Promise.resolve({
          data: game,
          status: 300
        })
      )

      await store.dispatch(rateGames(game, average))
      const actions = store.getActions()

      expect.assertions(2)

      expect(actions[0].type).toEqual(ERROR)
      expect(actions[0].payload).toEqual("Unable to rate game")

    })
  })
})
