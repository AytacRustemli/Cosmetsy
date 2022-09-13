import { GET_CATEGOIRES } from "../Constants/CategoryConstant"

export const CategoryReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case GET_CATEGOIRES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}