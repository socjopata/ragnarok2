import {keyBy, get} from 'lodash';

import {
  FETCH_IMPLANTS_STARTED,
  FETCH_IMPLANTS_FAILURE,
  FETCH_IMPLANTS_SUCCESS,
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
    case FETCH_IMPLANTS_STARTED:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case FETCH_IMPLANTS_SUCCESS:
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
    case FETCH_IMPLANTS_FAILURE:
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
