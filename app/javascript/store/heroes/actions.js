import * as api from '../../api';

export const FETCH_HEROES_STARTED = 'heroes/FETCH_STARTED';
export const FETCH_HEROES_SUCCESS = 'heroes/FETCH_SUCCESS';
export const FETCH_HEROES_FAILURE = 'heroes/FETCH_FAILURE';
export const INPUT_CHANGE = 'metaprogramming/INPUT_CHANGE';
export const HERO_CLASS_CHANGED = 'creator/HERO_CLASS_CHANGED';
export const FLEXIBLE_PARAMETER_SELECTED = 'creator/FLEXIBLE_PARAMETER_SELECTED';
export const MAIN_PARAMETER_INCREMENTED = 'creator/MAIN_PARAMETER_INCREMENTED';
export const MAIN_PARAMETER_DECREMENTED = 'creator/MAIN_PARAMETER_DECREMENTED';
export const SECONDARY_PARAMETER_INCREMENTED = 'creator/SECONDARY_PARAMETER_INCREMENTED';
export const SECONDARY_PARAMETER_DECREMENTED = 'creator/SECONDARY_PARAMETER_DECREMENTED';
export const VIRTUE_SELECTED = 'creator/VIRTUE_SELECTED';
export const ADVANTAGE_SELECTED = 'creator/ADVANTAGE_SELECTED';
export const ADVANTAGE_REMOVED = 'creator/ADVANTAGE_REMOVED';
export const IMPLANT_SELECTED = 'creator/IMPLANT_SELECTED';
export const IMPLANT_REMOVED = 'creator/IMPLANT_REMOVED';
export const EINHER_ENHANCEMENTS_DETERMINED = 'creator/EINHER_ENHANCEMENTS_DETERMINED';
export const REGIONS_FAMILIARITY_UPDATED = 'creator/REGIONS_FAMILIARITY_UPDATED';
export const HEXERI_SELECTED = 'creator/HEXERI_SELECTED';
export const HEXERI_REMOVED = 'creator/HEXERI_REMOVED';

export const inputChange = (value, fieldName) => ({type: INPUT_CHANGE, value: value, fieldName: fieldName});
export const heroClassSelected = (value) => ({type: HERO_CLASS_CHANGED, value: value});
export const flexibleSecondarySkillSelected = (flexibleParameterName, skillName, value) => ({
  type: FLEXIBLE_PARAMETER_SELECTED,
  value: value,
  skillName: skillName,
  flexibleParameterName: flexibleParameterName
});

export const mainParameterIncremented = (skillName, cost) => ({
  type: MAIN_PARAMETER_INCREMENTED,
  skillName: skillName,
  cost: cost
});

export const mainParameterDecremented = (skillName, costDeducted) => ({
  type: MAIN_PARAMETER_DECREMENTED,
  skillName: skillName,
  costDeducted: costDeducted
});

export const secondaryParameterIncremented = (skillName, cost) => ({
  type: SECONDARY_PARAMETER_INCREMENTED,
  skillName: skillName,
  cost: cost
});

export const secondaryParameterDecremented = (skillName, costDeducted) => ({
  type: SECONDARY_PARAMETER_DECREMENTED,
  skillName: skillName,
  costDeducted: costDeducted
});

export const virtueSelected = (virtueIndex, virtue) => ({
  type: VIRTUE_SELECTED,
  virtueIndex,
  virtue
});

export const advantageSelected = (advantageId, cost) => ({
  type: ADVANTAGE_SELECTED,
  advantageId,
  cost
});

export const advantageRemoved = (advantageId, cost) => ({
  type: ADVANTAGE_REMOVED,
  advantageId,
  cost
});

export const hexeriSelected = (hexeriId, cost) => ({
  type: HEXERI_SELECTED,
  hexeriId,
  cost
});

export const hexeriRemoved = (hexeriId, cost) => ({
  type: HEXERI_REMOVED,
  hexeriId,
  cost
});

export const implantSelected = (implantId, neurostabilityCost, moneyCost,) => ({
  type: IMPLANT_SELECTED,
  implantId,
  neurostabilityCost,
  moneyCost,
});

export const einherEnhancementsDetermined = (einherImplantsIds) => ({
  type: EINHER_ENHANCEMENTS_DETERMINED,
  einherImplantsIds,
});

export const implantRemoved = (implantId, neurostabilityCost, moneyCost,) => ({
  type: IMPLANT_REMOVED,
  implantId,
  neurostabilityCost,
  moneyCost,
});

export const regionsFamiliarityUpdated = (regionsFamiliarityChoice) => ({
  type: REGIONS_FAMILIARITY_UPDATED,
  regionsFamiliarityChoice
});

export const fetchHeroesStarted = () => ({
  type: FETCH_HEROES_STARTED,
});

export const fetchHeroesSuccess = heroes => ({
  type: FETCH_HEROES_SUCCESS,
  payload: heroes,
});

export const fetchHeroesFailure = error => ({
  type: FETCH_HEROES_FAILURE,
  payload: error,
});

export const fetchHeroes = dispatch => {
  dispatch(fetchHeroesStarted());

  return api
    .fetchHeroes()
    .then(heroes => dispatch(fetchHeroesSuccess(heroes)))
    .catch(res => dispatch(fetchHeroesFailure(String(res))));
};
