import mockAxios from "axios"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { getGames } from "../redux/actions/get-games"
import { LOADING, GET_GAMES, ERROR } from '../redux/actions/actions-types'
const { random } = Math

const mockStore = configureMockStore([thunk])

describe("getGames Action", () => {
  let store
  const id = random(),
    url = `url-${random()}`,
    name = `name-${random()}`,
    average = random(),
    reviews = [random()]

  beforeEach(() => {
    store = mockStore({
      games: []
    })
  })

  describe("getGames action creator", () => {
    it("dispatches GETGAMES action and returns data on success", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [{
            id,
            url,
            name,
            average,
            reviews
          },
          {
            id,
            url,
            name,
            average,
            reviews
          }],
          status: 200
        })
      )

      await store.dispatch(getGames())
      const actions = store.getActions()

      expect.assertions(13)
      expect(actions[0].type).toEqual(LOADING)
      expect(actions[1].type).toEqual(LOADING)
      expect(actions[2].type).toEqual(GET_GAMES)
      expect(actions[2].payload[0].name).toEqual(name)
      expect(actions[2].payload[0].id).toEqual(id)
      expect(actions[2].payload[0].url).toEqual(url)
      expect(actions[2].payload[0].average).toEqual(average)
      expect(actions[2].payload[0].reviews).toEqual(reviews)
      expect(actions[2].payload[1].name).toEqual(name)
      expect(actions[2].payload[1].id).toEqual(id)
      expect(actions[2].payload[1].url).toEqual(url)
      expect(actions[2].payload[1].average).toEqual(average)
      expect(actions[2].payload[1].reviews).toEqual(reviews)
    })

    it("tests GETGAMES action and that returns an error", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [{
            id,
            url,
            name,
            average,
            reviews
          },
          {
            id,
            url,
            name,
            average,
            reviews
          }],
          status: 418
        })
      )

      await store.dispatch(getGames())
      const actions = store.getActions()

      expect.assertions(3)
      expect(actions[0].type).toEqual(LOADING)
      expect(actions[1].type).toEqual(ERROR)
      expect(actions[1].payload).toEqual("I'm a teapot")

    })
  })
  
  it("tests GETGAMES action and that returns an error", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{
          id,
          url,
          name,
          average,
          reviews
        },
        {
          id,
          url,
          name,
          average,
          reviews
        }],
        status: 400
      })
    )

    await store.dispatch(getGames())
    const actions = store.getActions()

    expect.assertions(3)
    expect(actions[0].type).toEqual(LOADING)
    expect(actions[1].type).toEqual(ERROR)
    expect(actions[1].payload).toEqual("Unable to fetch games")

  })
})

