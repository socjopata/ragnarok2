import * as api from '../../api';

export const FETCH_IMPLANTS_STARTED = 'implants/FETCH_STARTED';
export const FETCH_IMPLANTS_SUCCESS = 'implants/FETCH_SUCCESS';
export const FETCH_IMPLANTS_FAILURE = 'implants/FETCH_FAILURE';

export const fetchImplantsStarted = () => ({
  type: FETCH_IMPLANTS_STARTED,
});

export const fetchImplantsSuccess = implants => ({
  type: FETCH_IMPLANTS_SUCCESS,
  payload: implants,
});

export const fetchImplantsFailure = error => ({
  type: FETCH_IMPLANTS_FAILURE,
  payload: error,
});

export const fetchImplants = dispatch => {
  dispatch(fetchImplantsStarted());

  return api
    .fetchImplants()
    .then(implants => dispatch(fetchImplantsSuccess(implants)))
    .catch(res => dispatch(fetchImplantsFailure(String(res))));
};
