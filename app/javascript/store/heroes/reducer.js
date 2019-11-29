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
  VIRTUE_SELECTED,
  ADVANTAGE_SELECTED,
  ADVANTAGE_REMOVED,
  IMPLANT_SELECTED,
  IMPLANT_REMOVED,
  REGIONS_FAMILIARITY_UPDATED
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
    selectedFlexibleSecondaryParameters: {},
    experiencePointsSpent: 0,
    neurostabilityPointsSpent: 0,
    moneySpent: 0,
    mainParametersIncreased: {},
    secondaryParametersIncreased: {},
    selectedVirtues: [null, null],
    chosenAdvantagesIds: new Array(12).fill(null),
    chosenImplantsIds: new Array(10).fill(null),
    regionsFamiliarityChoice: [],
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
          neurostabilityPointsSpent: 0,
          moneySpent: 0,
          mainParametersIncreased: {},
          secondaryParametersIncreased: {},
          selectedVirtues: [null, null],
          chosenAdvantagesIds: new Array(12).fill(null),
          chosenImplantsIds: new Array(10).fill(null),
          regionsFamiliarityChoice: [],
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
    case ADVANTAGE_SELECTED:
      let clonedChosenAdvantagesIds = [...state.character.chosenAdvantagesIds];
      clonedChosenAdvantagesIds[state.character.chosenAdvantagesIds.indexOf(null)] = parseInt(action.advantageId);
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent + action.cost,
          chosenAdvantagesIds: clonedChosenAdvantagesIds
        }
      };
    case ADVANTAGE_REMOVED:
      let _clonedChosenAdvantagesIds = [...state.character.chosenAdvantagesIds];
      _clonedChosenAdvantagesIds[state.character.chosenAdvantagesIds.indexOf(parseInt(action.advantageId))] = null;
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent - action.cost,
          chosenAdvantagesIds: _clonedChosenAdvantagesIds
        }
      };
    case IMPLANT_SELECTED:
      let clonedChosenImplantsIds = [...state.character.chosenImplantsIds];
      clonedChosenImplantsIds[state.character.chosenImplantsIds.indexOf(null)] = parseInt(action.implantId);
      return {
        ...state,
        character: {
          ...state.character,
          neurostabilityPointsSpent: state.character.neurostabilityPointsSpent + action.neurostabilityCost,
          moneySpent: state.character.moneySpent + action.moneyCost,
          chosenImplantsIds: clonedChosenImplantsIds,
        }
      };
    case IMPLANT_REMOVED:
      let _clonedChosenImplantsIds = [...state.character.chosenImplantsIds];
      _clonedChosenImplantsIds[state.character.chosenImplantsIds.indexOf(parseInt(action.implantId))] = null;
      return {
        ...state,
        character: {
          ...state.character,
          neurostabilityPointsSpent: state.character.neurostabilityPointsSpent - action.neurostabilityCost,
          moneySpent: state.character.moneySpent - action.moneyCost,
          chosenImplantsIds: _clonedChosenImplantsIds,
        }
      };
    case REGIONS_FAMILIARITY_UPDATED:
      return {
        ...state,
        character: {
          ...state.character,
          regionsFamiliarityChoice: action.regionsFamiliarityChoice,
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
