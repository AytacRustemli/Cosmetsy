import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { BlogReducer } from './Reducers/BlogReducer'
import { CategoryReducer } from './Reducers/CategoryReducer'
import { ProductReducers } from './Reducers/ProductReducer'


const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
    category : CategoryReducer,
    products : ProductReducers,
    blog : BlogReducer
})


const initialState = {
    category : [],
    products : [],
    blog: []
}

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;