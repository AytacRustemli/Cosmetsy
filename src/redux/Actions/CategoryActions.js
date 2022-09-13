import { BASE_URL } from "../../api/config"
import { GET_CATEGOIRES } from "../Constants/CategoryConstant"


export const getCategoryAction = () => async (dispatch, getState) => {
    let categories = await (await fetch(`${BASE_URL}category/getall`)).json()
    dispatch({
        type: GET_CATEGOIRES,
        payload: categories
    })
}
