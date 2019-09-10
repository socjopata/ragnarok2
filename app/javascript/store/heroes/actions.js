import * as api from '../../api';

export const FETCH_HEROES_STARTED = 'heroes/FETCH_STARTED';
export const FETCH_HEROES_SUCCESS = 'heroes/FETCH_SUCCESS';
export const FETCH_HEROES_FAILURE = 'heroes/FETCH_FAILURE';
export const INPUT_CHANGE = 'metaprogramming/INPUT_CHANGE';
export const HERO_CLASS_CHANGED = 'creator/HERO_CLASS_CHANGED';

export const inputChange = (value, fieldName) => ({ type: INPUT_CHANGE, value: value, fieldName: fieldName});
export const heroClassSelected = (value) => ({ type: HERO_CLASS_CHANGED, value: value });

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