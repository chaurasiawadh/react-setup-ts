import { takeLatest } from 'redux-saga/effects';
import SendRequest from '../../shared/services/sendRequest.service';
import actionTypes from '../types/exampleTypes';

function* getAPICallSagaExample(): any {
  const url = 'get_api_url'
  const sendRequest = SendRequest.instance;
  const response: any = yield SendRequest.instance.get<any>(url);
}

function* postApiCallSagaExample({ payload }: any): Generator {
  const sendRequest = SendRequest.instance;
  const requestJSON = {
    // payload
  };

  const url = '${GLOBAL_URL}/Register';
  try {
    const response: any = yield sendRequest.post<any, any>(url, requestJSON);
    return response;
  } catch (e) {
    console.error(e);
  }
}

export function* watchApiCallSagaExample(): any {
  yield takeLatest(actionTypes.GET_API_CALL, getAPICallSagaExample)
  yield takeLatest(actionTypes.POST_API_CALL, postApiCallSagaExample);
}

export default watchApiCallSagaExample;
