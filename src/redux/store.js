import {createStore, applyMiddleware, combineReducers } from 'redux'
// import reducers from './reducers/reducers'
import games from './reducers/games'
import loading from './reducers/loading'
import error from './reducers/error'
import random from './reducers/random'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    games,
    loading,
    error,
    random
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store