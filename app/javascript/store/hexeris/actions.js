import * as api from '../../api';

export const FETCH_HEXERIS_STARTED = 'hexeris/FETCH_STARTED';
export const FETCH_HEXERIS_SUCCESS = 'hexeris/FETCH_SUCCESS';
export const FETCH_HEXERIS_FAILURE = 'hexeris/FETCH_FAILURE';

export const fetchHexerisStarted = () => ({
  type: FETCH_HEXERIS_STARTED,
});

export const fetchHexerisSuccess = hexeris => ({
  type: FETCH_HEXERIS_SUCCESS,
  payload: hexeris,
});

export const fetchHexerisFailure = error => ({
  type: FETCH_HEXERIS_FAILURE,
  payload: error,
});

export const fetchHexeris = dispatch => {
  dispatch(fetchHexerisStarted());

  return api
    .fetchHexeris()
    .then(hexeris => dispatch(fetchHexerisSuccess(hexeris)))
    .catch(res => dispatch(fetchHexerisFailure(String(res))));
};
