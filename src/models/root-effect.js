import { takeEvery } from "redux-saga/effects";
import { effectActionTypes } from "./allEffectActionTypes";

import { createDeptRequest } from "./organizations/depts/effects";

function* allEffects() {
    yield takeEvery(effectActionTypes.DEPT_CREATE_REQUESTED, createDeptRequest);
}

export default allEffects;
