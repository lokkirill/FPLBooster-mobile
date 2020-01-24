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

// ------------------------ Selectors -------------------------
// Players
export function getPlayers(state) {
  return state.players.elements;
}
export function getPlayer(state) {
  return state.players.elements[0];
}

// GameWeeks
export function getGameWeeks(state) {
  return state.players.events ? state.players.events : [];
}
export function getPreviousGameWeek(state) {
  const prevGW = filterArray(state.players.events, 'is_previous', true)
  return prevGW[0] ? prevGW[0] : {};
}
export function getCurrentGameWeek(state) {
  const currGW = filterArray(state.players.events, 'is_current', true)
  return currGW[0] ? currGW[0] : {};
}
export function getNextGameWeek(state) {
  const nextGW = filterArray(state.players.events, 'is_next', true)
  return nextGW[0] ? nextGW[0] : {};
}

export function getPositions(state) {
  return state.players.element_types ? state.players.element_types : [];
}
export function getTeams(state) {
  return state.players.teams ? state.players.teams : [];
}
export function getGameSettings(state) {
  return state.players.game_settings ? state.players.game_settings : [];
}
export function getPhases(state) {
  return state.players.phases ? state.players.phases : [];
}
export function getTotalPlayers(state) {
  return state.players.total_players ? state.players.total_players : [];
}
export function getPlayersStats(state) {
  return state.players.element_stats ? state.players.element_stats : [];
}

const filterArray = (arr, key, val) => {
  return arr.filter((element) => {
    return element[key] == val;
  })
}
