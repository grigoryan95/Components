import {SET_CATEGORIES, CHANGE_IS_LOADER_CATEGORIES} from "../actionTypes/actionTypes";

const initialState = {
    categories: [],
    categoriesCount: 0,
    isLoader: false
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload.result,
                categoriesCount: action.payload.count
            }
        }
        case CHANGE_IS_LOADER_CATEGORIES: {
            return {
                ...state,
                isLoader: !state.isLoader
            }
        }
        default:
            return state
    }
};