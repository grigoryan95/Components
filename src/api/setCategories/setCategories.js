import {SET_CATEGORIES} from "../../redux/actionTypes/actionTypes";
import axios from "axios";

export const setCategories = (textValue = '',offset = 0, limit= 10 ) => {
    return async (dispatch) => {
        const response = await axios({
            method: "get",
            url: `http://18.223.35.168:5005/api/categories/search?limit=${limit}&offset=${offset}&beginning=${textValue}`
        })
        dispatch({
            type: SET_CATEGORIES,
            payload: response.data
        })
        return response.data;
    };
};

