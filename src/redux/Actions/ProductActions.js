import { GET_PRODUCTS } from "../Constants/ProductConstants"
import { BASE_URL } from './../../api/config';


export const getProductsAction  = () => async (dispatch,getState) =>{
    let products = await (await fetch(`${BASE_URL}Product/productlist`)).json()
    dispatch({
        type: GET_PRODUCTS,
        payload: products.message
    })

}
