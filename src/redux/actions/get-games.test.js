import mockAxios from "axios"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { getGames } from "./get-games"

const mockStore = configureMockStore([thunk])

describe("getGames Action", () => {
  let store

  beforeEach(() => {
    store = mockStore({
      games: []
    })
  })

  describe("getGames action creator", () => {
    it("dispatches GETGAMES action and returns data on success", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: { id: 1, name: "God of War" },
          status: 200

        })
      )

      await store.dispatch(getGames())
      const actions = store.getActions()

        
      expect.assertions(3)
      expect(actions[0].type).toEqual("LOADING")
      expect(actions[1].type).toEqual("GETGAMES")
      expect(actions[1].payload.name).toEqual("God of War")
      expect(actions[1].payload.id).toEqual(1)
    })

    it("tests GETGAMES action and that returns an error", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject({
          error: "Something bad happened :("
        })
      )
      
      try { 
        await store.dispatch(getGames())
      } catch {
        const actions = store.getActions()

        expect.assertions(3)
        expect(actions[0].type).toEqual("LOADING")
        expect(actions[1].type).toEqual("ERROR")
        expect(actions[1].payload.error).toEqual("Something bad happened :(")
      }
    })
  })
})
