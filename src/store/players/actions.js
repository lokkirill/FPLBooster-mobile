import _ from 'lodash';
import * as types from './actionTypes';

import FPLApiService from '../../services/FPLApi';
import PremierLeagueTableService from '../../services/PremierLeagueTable';

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

export function fetchPLTableData() {
  return async(dispatch, getState) => {
    dispatch({ type: types.FETCH_PL_TABLE_PENDING })
    try {
      const data = await PremierLeagueTableService.fetchPremierLeagueTable();
      dispatch({ type: types.FETCH_PL_TABLE_SUCCESS, data });
    } catch (error) {
      dispatch({ type: types.FETCH_PL_TABLE_ERROR, error });
    }
  };
}
