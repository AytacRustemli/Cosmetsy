import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { BlogReducer } from './Reducers/BlogReducer'
import { BrandReducer } from './Reducers/BrandReducer'
import { CartReducer } from './Reducers/CartReducer'
import { CategoryReducer } from './Reducers/CategoryReducer'
import { addCheckOutReducer } from './Reducers/CheckOutReducer'
import { FavoriesReducer } from './Reducers/FavoriesReducer'
import { ProductReducers } from './Reducers/ProductReducer'
import { UserReducer } from './Reducers/UserReducer'


const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
    category : CategoryReducer,
    products : ProductReducers,
    blog : BlogReducer,
    user: UserReducer,
    cart: CartReducer,
    checkout: addCheckOutReducer,
    favories: FavoriesReducer,
    brand : BrandReducer
})

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")):[]

const favoriesItemFromLocalStorage = localStorage.getItem("favoriesItems")
 ? JSON.parse(localStorage.getItem("favoriesItems")):[]


const initialState = {
    category : [],
    products : [],
    blog: [],
    user: {userInfo: userInfoFromLocalStorage},
    cart:{cartItems: cartItemFromLocalStorage},
    checkout: {checkOut: []},
    favories:{favoriesItems: favoriesItemFromLocalStorage},
    brand : []
}

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;