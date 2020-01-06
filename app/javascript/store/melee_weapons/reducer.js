import {keyBy, get} from 'lodash';

import {
  FETCH_MELEE_WEAPONS_STARTED,
  FETCH_MELEE_WEAPONS_FAILURE,
  FETCH_MELEE_WEAPONS_SUCCESS,
} from './actions';

const initialState = {
  byId: {},
  list: {
    ids: [],
    error: null,
    loading: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MELEE_WEAPONS_STARTED:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case FETCH_MELEE_WEAPONS_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...keyBy(action.payload, 'id'),
        },
        list: {
          ids: action.payload.map(({id}) => id),
          loading: false,
          error: null,
        },
      };
    case FETCH_MELEE_WEAPONS_FAILURE:
      return {
        ...state,
        list: {
          ids: [],
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
