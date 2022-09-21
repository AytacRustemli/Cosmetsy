import { BASE_URL } from "../../api/config"
import { GET_BRAND } from "../Constants/BrandConstant"



export const getBrandAction = () => async (dispatch, getState) => {
    let brands = await (await fetch(`${BASE_URL}brand/getall`)).json()
    dispatch({
        type: GET_BRAND,
        payload: brands
    })
}
