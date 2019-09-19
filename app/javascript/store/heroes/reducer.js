import {keyBy, get} from 'lodash';

import {
  FETCH_HEROES_STARTED,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
  INPUT_CHANGE,
  HERO_CLASS_CHANGED,
  FLEXIBLE_PARAMETER_SELECTED,
  MAIN_PARAMETER_INCREMENTED,
  MAIN_PARAMETER_DECREMENTED,
  SECONDARY_PARAMETER_INCREMENTED,
  SECONDARY_PARAMETER_DECREMENTED,
  VIRTUE_SELECTED
} from './actions';
import {heroSelected} from "./selectors";

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
    selectedFlexibleSecondaryParameters: {},
    experiencePointsSpent: 0,
    mainParametersIncreased: {},
    secondaryParametersIncreased: {},
    selectedVirtues: [null, null]
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
          selectedFlexibleSecondaryParameters: {},
          experiencePointsSpent: 0,
          mainParametersIncreased: {},
          secondaryParametersIncreased: {},
          selectedVirtues: [null, null]
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
    case MAIN_PARAMETER_INCREMENTED:
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent + action.cost,
          mainParametersIncreased: {
            ...state.character.mainParametersIncreased,
            [action.skillName]: get(state, ['character', 'mainParametersIncreased', action.skillName], 0) + 1
          }
        }
      };
    case MAIN_PARAMETER_DECREMENTED:
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent - action.costDeducted,
          mainParametersIncreased: {
            ...state.character.mainParametersIncreased,
            [action.skillName]: get(state, ['character', 'mainParametersIncreased', action.skillName], 0) - 1
          }
        }
      };
    case SECONDARY_PARAMETER_INCREMENTED:
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent + action.cost,
          secondaryParametersIncreased: {
            ...state.character.secondaryParametersIncreased,
            [action.skillName]: get(state, ['character', 'secondaryParametersIncreased', action.skillName], 0) + 1
          }
        }
      };
    case SECONDARY_PARAMETER_DECREMENTED:
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent - action.costDeducted,
          secondaryParametersIncreased: {
            ...state.character.secondaryParametersIncreased,
            [action.skillName]: get(state, ['character', 'secondaryParametersIncreased', action.skillName], 0) - 1
          }
        }
      };
    case VIRTUE_SELECTED:
      const clonedSelectedVirtues = [...state.character.selectedVirtues];
      clonedSelectedVirtues[action.virtueIndex] = action.virtue;
      return {
        ...state,
        character: {
          ...state.character,
          selectedVirtues: clonedSelectedVirtues
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
          ids: action.payload.map(({id}) => id),
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
