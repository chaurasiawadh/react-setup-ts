import { AnyAction, Reducer } from 'redux';
import actionTypes from '../types/exampleTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  fakeData: {}
};

const getApiCallData = (state: any): any =>
  updateObject<any, any>(state, {});

const postApiCallData = (state: any): any =>
  updateObject<any, any>(state, {});

const reducer: Reducer<any> = (
  state: any = initialState,
  action: AnyAction,
): any | any => {
  switch (action.type) {
    case actionTypes.GET_API_CALL: return getApiCallData(state);
    case actionTypes.POST_API_CALL: return postApiCallData(state);
    default: return state;
  }
};

export { reducer as exampleReducer };
