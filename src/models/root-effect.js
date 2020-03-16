import { takeEvery } from "redux-saga/effects";
import { effectActionTypes } from "./allEffectActionTypes";

import { createDeptRequest } from "./organizations/depts/effects";
import { createUserRequest, readUserListRequest } from "./users/effects";

function* allEffects() {
    // depts
    yield takeEvery(effectActionTypes.DEPT_CREATE_REQUESTED, createDeptRequest);

    // users
    yield takeEvery(effectActionTypes.USER_CREATE_REQUESTED, createUserRequest);
    yield takeEvery(effectActionTypes.USER_LIST_REQUESTED, readUserListRequest);
}

export default allEffects;
