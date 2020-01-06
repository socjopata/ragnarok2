import * as api from '../../api';

export const FETCH_RANGED_WEAPONS_STARTED = 'melee_weapons/FETCH_STARTED';
export const FETCH_RANGED_WEAPONS_SUCCESS = 'melee_weapons/FETCH_SUCCESS';
export const FETCH_RANGED_WEAPONS_FAILURE = 'melee_weapons/FETCH_FAILURE';

export const fetchRangedWeaponsStarted = () => ({
  type: FETCH_RANGED_WEAPONS_STARTED,
});

export const fetchRangedWeaponsSuccess = melee_weapons => ({
  type: FETCH_RANGED_WEAPONS_SUCCESS,
  payload: melee_weapons,
});

export const fetchRangedWeaponsFailure = error => ({
  type: FETCH_RANGED_WEAPONS_FAILURE,
  payload: error,
});

export const fetchRangedWeapons = dispatch => {
  dispatch(fetchRangedWeaponsStarted());

  return api
    .fetchRangedWeapons()
    .then(melee_weapons => dispatch(fetchRangedWeaponsSuccess(melee_weapons)))
    .catch(res => dispatch(fetchRangedWeaponsFailure(String(res))));
};
