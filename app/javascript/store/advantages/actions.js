import * as api from '../../api';

export const FETCH_ADVANTAGES_STARTED = 'advantages/FETCH_STARTED';
export const FETCH_ADVANTAGES_SUCCESS = 'advantages/FETCH_SUCCESS';
export const FETCH_ADVANTAGES_FAILURE = 'advantages/FETCH_FAILURE';

export const fetchAdvantagesStarted = () => ({
  type: FETCH_ADVANTAGES_STARTED,
});

export const fetchAdvantagesSuccess = advantages => ({
  type: FETCH_ADVANTAGES_SUCCESS,
  payload: advantages,
});

export const fetchAdvantagesFailure = error => ({
  type: FETCH_ADVANTAGES_FAILURE,
  payload: error,
});

export const fetchAdvantages = dispatch => {
  dispatch(fetchAdvantagesStarted());

  return api
    .fetchAdvantages()
    .then(advantages => dispatch(fetchAdvantagesSuccess(advantages)))
    .catch(res => dispatch(fetchAdvantagesFailure(String(res))));
};
