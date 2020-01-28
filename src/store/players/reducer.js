import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
import { color } from 'react-native-reanimated';

// initial state
const initialState = Immutable({
  elements: [],
  element_types: [],
  season: {},
  table: [],
  teams: [],
});

// Reducer
export default reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FETCH_FPL_DATA_SUCCESS:
      return state.merge({
        ...action.fplData
      });
    case types.FETCH_PL_TABLE_SUCCESS:
      return state.merge({
        ...action.data,
      });
    default:
      return state;
  }
}

// ------------------------ Selectors -------------------------
// Players
export const getPlayers = (state) => {
  return state.players.elements;
}
export const getPlayer = (state) => {
  return state.players.elements[0];
}

// GameWeeks
export const getGameWeeks = (state) => {
  return state.players.events ? state.players.events : [];
}
export const getPreviousGameWeek = (state) => {
  const prevGW = filterArray(state.players.events, 'is_previous', true)
  return prevGW[0] ? prevGW[0] : {};
}
export const getCurrentGameWeek = (state) => {
  const currGW = filterArray(state.players.events, 'is_current', true)
  return currGW[0] ? currGW[0] : {};
}
export const getNextGameWeek = (state) => {
  const nextGW = filterArray(state.players.events, 'is_next', true)
  return nextGW[0] ? nextGW[0] : {};
}

// Teams / Table
export const getTeams = (state) => {
  return state.players.teams ? state.players.teams : [];
}
// export const getTeamByID = (state, id) => {
//   const teamArr = filterArray(state.players.teams, 'id', id)
//   return teamArr[0] ? teamArr[0] : {};
// }
// export const getTeamByCode = (state, code) => {
//   const teamArr = filterArray(state.players.teams, 'code', code)
//   return teamArr[0] ? teamArr[0] : {};
// }
export const getTable = (state) => {
  return state.players.table.map(team => {
    const teamArr = filterArray(state.players.teams, 'short_name', team.team.club.abbr)
    return {
      ...teamArr[0],
      results: team,
    }
  });
}

export const getPositions = (state) => {
  return state.players.element_types ? state.players.element_types : [];
}
export const getGameSettings = (state) => {
  return state.players.game_settings ? state.players.game_settings : [];
}
export const getPhases = (state) => {
  return state.players.phases ? state.players.phases : [];
}
export const getTotalPlayers = (state) => {
  return state.players.total_players ? state.players.total_players : [];
}
export const getPlayersStats = (state) => {
  return state.players.element_stats ? state.players.element_stats : [];
}

const filterArray = (arr, key, val) => {
  return arr.filter((element) => {
    return element[key] == val;
  })
}
