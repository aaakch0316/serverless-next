import { all, put, takeLatest } from "redux-saga/effects";
import Router from 'next/router';

import * as t from "../types";

function* fetchtest() {
	try {
        console.log('들어온다')
		const response = yield fetch("/api/test", {
			method: "GET"
		});
		console.log('들어온다 response')
		console.log(response)
		const employeeList = yield response.json();
		console.log('employeeList')
		console.log(employeeList)
		// console.log(employeeList.a)
		console.log(employeeList.a.token)
		// Router.push('/about');
		console.log(111111111111111)
		// const employeeList = yield response.json();
		// yield put({
		// 	type: t.EMPLOYEE_FETCH_SUCCEEDED,
		// 	payload: employeeList.data,
		// });
	} catch (error) {
		// yield put({
		// 	type: t.EMPLOYEE_FETCH_FAILED,
		// 	payload: error.message,
		// });
	}
}

function* watchFetchtest() {
	yield takeLatest(t.TEST_START, fetchtest);
}


function* getVideo(action) {
	try {
        console.log('들어온다')
        console.log('들어온다1')
		console.log(action)
		console.log(action.payload)
		const response = yield fetch("/api/test", {
			method: "POST",
			body: JSON.stringify(action.payload),
		});
		const employeeList = yield response.json();
		console.log('employeeList222')
		console.log(employeeList)

	} catch (error) {
	}
}

function* watchGetVideo() {
	yield takeLatest(t.GET_VIDEO, getVideo);
}

export default function* rootSaga() {
	yield all([
		watchFetchtest(),
		watchGetVideo()
		// watchAddEmployee(),
		// watchRemoveEmployee(),
		// watchUpdateEmployee(),
	]);
}