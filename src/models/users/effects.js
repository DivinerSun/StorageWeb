import { call, put } from "redux-saga/effects";
import { actionTypes } from "./actionTypes";
import { create, readList } from "../../services/users";

export function* createUserRequest({ payload: user }) {
    try {
        const { err, data } = yield call(create, user);
        console.log("userEffects: ", err, data, user);
        yield put({ type: actionTypes.USER_CREATE_SUCCEEDED, payload: data });
    } catch (e) {
        yield put({ type: actionTypes.USER_FAILED, payload: e.message });
    }
}

export function* readUserListRequest({ payload }) {
    try {
        const { err, data } = yield call(readList);
        console.log("userEffects: ", err, data);
        yield put({ type: actionTypes.USER_LIST_SUCCEEDED, payload: data });
    } catch (e) {
        yield put({ type: actionTypes.USER_FAILED, payload: e.message });
    }
}
