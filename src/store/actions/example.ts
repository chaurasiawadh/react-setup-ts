import { Action } from 'store/models/action.model';
import { updateAction } from '../../utils/utility';
import actionTypes from '../types/exampleTypes';

export const fetchGetApiCallExample = (): Action<any> => {
  return updateAction(actionTypes.GET_API_CALL);
};

export const fetchGetApiDataExample = (payload: any): Action<any> => {
  return updateAction(actionTypes.GET_API_DATA, payload);
};


export const fetchPostApiCallExample = (payload: any): Action<any> => {
  return updateAction(actionTypes.POST_API_CALL, payload);
};
