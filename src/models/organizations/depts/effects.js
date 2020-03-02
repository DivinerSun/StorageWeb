import { call, put } from 'redux-saga/effects'
import { actionTypes } from './actionTypes'
import { createDept } from '../../../services/organizations'

export function* createDeptRequest({ payload: dept }) {
    try {
        const result = yield call(createDept, dept);
        yield put({ type: actionTypes.DEPT_CREATE_SUCCEEDED, payload: result });
    } catch (e) {
        yield put({ type: actionTypes.DEPT_FAILED, payload: e.message });
    }
}
