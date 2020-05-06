import mockAxios from "axios"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { rateGames } from "./rate-games"

const mockStore = configureMockStore([thunk])

describe("rateGames Action", () => {
  let store

  beforeEach(() => {
    store = mockStore({
      games: []
    })
  })

  describe("rateGames action creator", () => {
    it("dispatches RATEGAMES action and returns data on success", async () => {
        const game = { id: 3, name: "God of War", reviews: [], average: 0}
      const average = 5
      mockAxios.put.mockImplementationOnce(() =>
        Promise.resolve({
          data: game,
          status: 200

        })
      )
      

      await store.dispatch(rateGames(game, average))
      const actions = store.getActions()
   
        
      expect.assertions(5)
      expect(actions[0].type).toEqual("RATEGAMES")
      expect(actions[0].payload.name).toEqual(game.name)
      expect(actions[0].payload.id).toEqual(game.id)
      expect(actions[0].payload.reviews).toEqual(game.reviews)
      expect(actions[0].payload.average).toEqual(game.average)
    })

    it("tests RATEGAMES action and that returns an error", async () => {
        const game ={ id: 3, name: "God of War", reviews: [], average: 0}
        const average = 5
      mockAxios.put.mockImplementationOnce(() =>
        Promise.reject({
          error: "Something bad happened :("
        })
      )
      
      try { 
        await store.dispatch(rateGames(game, average))
      } catch {
        const actions = store.getActions()

        expect.assertions(2)
        
        expect(actions[0].type).toEqual("ERROR")
        expect(actions[0].payload.error).toEqual("Something bad happened :(")
      }
    })
  })
})
