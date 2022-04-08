import {SET_PRODUCTS, CHANGE_IS_LOADER_PRODUCT} from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    productsCount: 0,
    isLoader: false
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload.result,
                productsCount: action.payload.count,
            }
        }
        case CHANGE_IS_LOADER_PRODUCT: {
            return {
                ...state,
                isLoader: !state.isLoader
            }
        }
        default:
            return state
    }
};