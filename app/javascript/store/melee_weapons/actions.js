import * as api from '../../api';

export const FETCH_MELEE_WEAPONS_STARTED = 'melee_weapons/FETCH_STARTED';
export const FETCH_MELEE_WEAPONS_SUCCESS = 'melee_weapons/FETCH_SUCCESS';
export const FETCH_MELEE_WEAPONS_FAILURE = 'melee_weapons/FETCH_FAILURE';

export const fetchMeleeWeaponsStarted = () => ({
  type: FETCH_MELEE_WEAPONS_STARTED,
});

export const fetchMeleeWeaponsSuccess = melee_weapons => ({
  type: FETCH_MELEE_WEAPONS_SUCCESS,
  payload: melee_weapons,
});

export const fetchMeleeWeaponsFailure = error => ({
  type: FETCH_MELEE_WEAPONS_FAILURE,
  payload: error,
});

export const fetchMeleeWeapons = dispatch => {
  dispatch(fetchMeleeWeaponsStarted());

  return api
    .fetchMeleeWeapons()
    .then(melee_weapons => dispatch(fetchMeleeWeaponsSuccess(melee_weapons)))
    .catch(res => dispatch(fetchMeleeWeaponsFailure(String(res))));
};
