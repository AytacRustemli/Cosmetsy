import { GET_BRAND } from "../Constants/BrandConstant"



export const BrandReducer = (state = { brands: [] }, action) => {
    switch (action.type) {
        case GET_BRAND:
            return {
                ...state,
                brands: action.payload
            }
        default:
            return state
    }
}