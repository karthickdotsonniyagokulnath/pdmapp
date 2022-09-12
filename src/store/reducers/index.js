import { combineReducers } from "redux";
import configReducer from "./configReducer";

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import API from '../../service/api'
import { history } from "../../helpers/common";
import toast from "../../components/Toast";

const middlewareEnhancer = applyMiddleware(
    thunk.withExtraArgument({
        API,
        toast,
        history
    })
)

export default combineReducers({
    config: configReducer,
    middlewareEnhancer
})