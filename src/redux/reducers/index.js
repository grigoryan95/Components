import {combineReducers, createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./productsDataReducer";
import {categoriesReducer} from "./categoriesDataReducer";

export const store = createStore(combineReducers({
    productsReducer,
    categoriesReducer
}), applyMiddleware(thunk));