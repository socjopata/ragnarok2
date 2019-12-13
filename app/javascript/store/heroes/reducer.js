import {keyBy, get, sum, find, map} from 'lodash';
import { DiceRoller, DiceRoll } from 'rpg-dice-roller';

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
  EINHER_ENHANCEMENTS_DETERMINED,
  REGIONS_FAMILIARITY_UPDATED,
  HEXERI_SELECTED,
  HEXERI_REMOVED,
} from './actions';


// TODO where to put this code?
const uniqueDiceRollSet = (numberOfDices, numberOfSides, ...compareNumbers) => {
  let uniqueNumber;
  do {
    uniqueNumber = sum(new DiceRoll(`${numberOfDices}d${numberOfSides}`).rolls[0]);
  } while(compareNumbers.includes(uniqueNumber));
  return uniqueNumber;
};

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
    chosenHexerisIds: new Array(10).fill(null),
    einherRolls: [],
    einherImplantsIds: [],
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
          chosenHexerisIds: new Array(10).fill(null),
          einherRolls: [],
          einherImplantsIds: [],
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

      const _state = {
        ...state,
        character: {
          ...state.character,
          selectedVirtues: clonedSelectedVirtues
        }
      };

      // randomly roll dices for the Einher
      // TODO where to put this code?
      if (action.virtue.internal_name === "cybernetic_body") {
        const NUMBERS_MAP = {
          2: [2],
          3: [3, 4],
          4: [3, 4],
          5: [5, 6],
          6: [5, 6],
          7: [7, 8, 9],
          8: [7, 8, 9],
          9: [7, 8, 9],
          10: [10, 11, 12],
          11: [10, 11, 12],
          12: [10, 11, 12],
          13: [13, 14, 15],
          14: [13, 14, 15],
          15: [13, 14, 15],
          16: [16, 17],
          17: [16, 17],
          18: [18, 19],
          19: [18, 19],
          20: [20],
        };

        const firstRoll = sum(new DiceRoll('2d10').rolls[0]);
        const reservedNumbers = NUMBERS_MAP[firstRoll];
        const secondRoll = uniqueDiceRollSet(2, 10, ...reservedNumbers);
        _state.character.einherRolls = [firstRoll, secondRoll];
      } else if (action.virtue.internal_name === "crazy_genius") {
        const crazyGenius = find(_state.byId, character => character.name === 'Techmistrz');
        crazyGenius.parameters = map(crazyGenius.parameters, parameter => {
            parameter.value = parameter.value === 0 ? 0 : parameter.value + 1;
            return (parameter)
          }
        );

        _state.byId[crazyGenius.id] = crazyGenius;
      }

      return _state;
    case EINHER_ENHANCEMENTS_DETERMINED:
      const clonedEinherImplantsIds = action.einherImplantsIds;
      return {
        ...state,
        character: {
          ...state.character,
          einherImplantsIds: clonedEinherImplantsIds,
          einherRolls: [],
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
    case HEXERI_SELECTED:
      let clonedChosenHexerisIds = [...state.character.chosenHexerisIds];
      clonedChosenHexerisIds[state.character.chosenHexerisIds.indexOf(null)] = parseInt(action.hexeriId);
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent + action.cost,
          chosenHexerisIds: clonedChosenHexerisIds
        }
      };
    case HEXERI_REMOVED:
      let _clonedChosenHexerisIds = [...state.character.chosenHexerisIds];
      _clonedChosenHexerisIds[state.character.chosenHexerisIds.indexOf(parseInt(action.hexeriId))] = null;
      return {
        ...state,
        character: {
          ...state.character,
          experiencePointsSpent: state.character.experiencePointsSpent - action.cost,
          chosenHexerisIds: _clonedChosenHexerisIds
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
