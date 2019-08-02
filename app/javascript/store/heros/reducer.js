import { keyBy } from 'lodash';

import {
  FETCH_HEROES_STARTED,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
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
    case FETCH_HEROES_STARTED:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case FETCH_HEROES_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...keyBy(action.payload, 'id'),
        },
        list: {
          ids: action.payload.map(({ id }) => id),
          loading: false,
          error: null,
        },
      };
    case FETCH_HEROES_FAILURE:
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
