import {createStore, applyMiddleware } from 'redux'
import reducers from './reducers/reducers'
import thunk from 'redux-thunk'

const initialState = {
    games:[],
    error: false,
    errorMessage: null,
    isLoading: false
}

const store = createStore(reducers, initialState, applyMiddleware(thunk))

export default store