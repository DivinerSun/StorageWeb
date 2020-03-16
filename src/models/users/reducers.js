import { actionTypes } from "./actionTypes";

const defaultState = {
    errors: {}
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case actionTypes.USER_CREATE_SUCCEEDED:
            console.log("user-create", payload);
            return {
                ...state,
                payload
            };

        default:
            return state;
    }
};
