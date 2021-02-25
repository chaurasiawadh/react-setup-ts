import { takeLatest, put } from 'redux-saga/effects';
import { fetchGetApiDataExample } from 'store/actions/example';
import SendRequest from '../../shared/services/sendRequest.service';
import actionTypes from '../types/exampleTypes';

const sendRequest = SendRequest.instance;

function* getAPICallSagaExample(): any {
  console.log('getAPICallSagaExample');

  const url = 'https://jsonplaceholder.typicode.com/todos';
  const response: any = yield sendRequest.MakeAPICall({ url });
  console.log('response', response);

  yield put(fetchGetApiDataExample(response));
}

function* postAPICallSagaExample({ payload }: any): Generator {
  console.log('postAPICallSagaExample');

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
