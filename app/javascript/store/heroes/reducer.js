import { keyBy } from 'lodash';

import {
  FETCH_HEROES_STARTED,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
  INPUT_CHANGE,
  HERO_CLASS_CHANGED,
  FLEXIBLE_PARAMETER_SELECTED
} from './actions';

const initialState = {
  byId: {},
  list: {
    ids: [],
    error: null,
    loading: null,
  },
  character: {
    id: 0,
    name: "",
    usedFlexibleSecondaryParameters: [],
    selectedFlexibleSecondaryParameters: {}
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO_CLASS_CHANGED:
      return {
        ...state,
        character: {
          id: action.value,
          name: state.character.name,
          usedFlexibleSecondaryParameters: [],
          selectedFlexibleSecondaryParameters: {}
        }
      };
    case INPUT_CHANGE:
      return {
        ...state,
        character: {
          ...state.character,
          [action.fieldName]: action.value
        }
      };
    case FLEXIBLE_PARAMETER_SELECTED:
      return {
        ...state,
        character: {
          ...state.character,
          usedFlexibleSecondaryParameters: [
            ...state.character.usedFlexibleSecondaryParameters,
            action.flexibleParameterName
          ],
          selectedFlexibleSecondaryParameters: {
            ...state.character.selectedFlexibleSecondaryParameters,
            [action.skillName]: action.value,
          },
        }
      };
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
