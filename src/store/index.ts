import { combineReducers } from 'redux';
import apiCallSaga from './sagas/apiCallSaga';
import { fork, all } from 'redux-saga/effects';

export interface RootState {
  // add models
}

export const createRootReducer = (): any =>
  combineReducers({
    // add reducer file
    // userDetails: userDetailsReducerFileImport
  });

export function* rootSaga(): Generator {
  yield all(
    [
      fork(apiCallSaga),
    ]);
}
