import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

// initial state
const initialState = Immutable({
  elements: [],
  element_types: [],
  teams: [],
});

// Reducer
export default reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_FPL_DATA_SUCCESS:
      return state.merge({
        ...action.fplData
      });
    default:
      return state;
  }
}

// Selectors
export function getPlayers(state) {
  return state.players.elements;
}
export function getPositions(state) {
  return state.element_types ? state.element_types : [];
}
export function getTeams(state) {
  return state.teams ? state.teams : [];
}
export function getPlayer(state) {
  return state.players.elements[0];
}
