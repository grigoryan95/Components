import {SET_PRODUCTS} from "../../redux/actionTypes/actionTypes";
import axios from "axios";

export const setProducts = (textValue = '',offset = 0, limit= 10 ) => {
    return async (dispatch) => {
        const response = await axios({
            method: "get",
            url: `https://hihub-dev.kree.dev/api/storage/search?offset=${offset}&limit=${limit}&beginning=${textValue}`
        })
        dispatch({
            type: SET_PRODUCTS,
            payload: response.data
        })
        return response.data;
    };
};