import _ from 'lodash';
import * as types from './actionTypes';
import FPLApiService from '../../services/FPLApi';

export function fetchFPLData() {
  return async(dispatch, getState) => {
    dispatch({ type: types.FETCH_FPL_DATA_PENDING })
    try {
      const fplData = await FPLApiService.fetchFPLData();
      dispatch({ type: types.FETCH_FPL_DATA_SUCCESS, fplData });
    } catch (error) {
      dispatch({ type: types.FETCH_FPL_DATA_ERROR, error });
    }
  };
}