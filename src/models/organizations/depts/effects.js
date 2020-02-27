import { call, put, takeEvery } from 'redux-saga/effects'
import { actionTypes } from './actionTypes'
import { createDept } from '../../../services/organizations'

function* createDeptRequest({ payload: dept }) {
    try {
        const result = yield call(createDept, dept);
        yield put({ type: actionTypes.DEPT_CREATE_SUCCEEDED, payload: result });
    } catch (e) {
        yield put({ type: actionTypes.DEPT_FAILED, payload: e.message });
    }
}

function* deptEffects() {
    yield takeEvery(actionTypes.DEPT_CREATE_REQUESTED, createDeptRequest);
}

export default deptEffects;