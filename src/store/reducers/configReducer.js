import { COMMON_CONFIG } from "./actionTypes";

const initialState = {
    locale: 'en'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case COMMON_CONFIG:
            return {
                ...state,
            };
        default:
            return state;
    }
}