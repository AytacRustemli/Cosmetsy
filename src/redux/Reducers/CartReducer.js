import { ADD_TO_CART, GET_CART_ITEMS, REMOVE_ALL_CART, REMOVE_FAVORIES_ITEMS } from "../Constants/CartConstants";


export const CartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let item = action.payload;
            let myCart = state.cartItems.find(c => c.id === item.id);
            if (myCart) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((a) => a.id === myCart.id ? item : a)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
        }
        case REMOVE_FAVORIES_ITEMS:
        
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        case GET_CART_ITEMS:
            return {
                ...state,
                cart: action.payload
            }
        case REMOVE_ALL_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}