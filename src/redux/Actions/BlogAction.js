import { GET_BLOG } from '../Constants/BlogConstant';
import { BASE_URL } from './../../api/config';

export const getBlogAction = () => async (dispatch, getState) => {
    let blogs = await (await fetch(`${BASE_URL}blog/getall`)).json()
    dispatch({
        type: GET_BLOG,
        payload: blogs
    })
}