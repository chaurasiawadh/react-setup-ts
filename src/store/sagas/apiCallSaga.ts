import { takeLatest } from 'redux-saga/effects';
import SendRequest from '../../shared/services/sendRequest.service';
import actionTypes from '../types/exampleTypes';

const sendRequest = SendRequest.instance;

function* getAPICallSagaExample(): any {
  const url = 'get_api_url'
  const response: any = yield sendRequest.MakeAPICall({ url });
}

function* postAPICallSagaExample({ payload }: any): Generator {
  const requestJSON = {
    // payload
  };

  const url = '${GLOBAL_URL}/Register';
  try {
    const response: any = yield sendRequest.MakeAPICall({ url, body: requestJSON });
    return response;
  } catch (e) {
    console.error(e);
  }
}

export function* watchApiCallSagaExample(): any {
  yield takeLatest(actionTypes.GET_API_CALL, getAPICallSagaExample)
  yield takeLatest(actionTypes.POST_API_CALL, postAPICallSagaExample);
}

export default watchApiCallSagaExample;
