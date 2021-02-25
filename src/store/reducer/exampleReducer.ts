import { AnyAction, Reducer } from 'redux';
import actionTypes from '../types/exampleTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  fakeDataList: []
};

const postApiCallData = (state: any): any =>
  updateObject<any, any>(state, {});

const exampleReducer: Reducer<any> = (state: any = initialState, action: AnyAction): any | any => {
  switch (action.type) {
    case actionTypes.GET_API_DATA: return {
      ...state,
      fakeDataList: action.payload,
    };
    case actionTypes.POST_API_CALL: return postApiCallData(state);
    default: return state;
  }
};

export default exampleReducer;

