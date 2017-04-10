import { fork, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import { deleteJwtToken, getJwtToken } from './auth';
import { loginPage } from '../localUrls';

export function bootstrap(sagas, exitSaga) {
  function* bootstrapSaga() {
    const tasks = yield sagas.map((saga) => fork(saga));
    yield take(LOCATION_CHANGE);
    if (exitSaga !== undefined) {
      yield exitSaga();
    }
    yield tasks.map((task) => cancel(task));
  }

  return [bootstrapSaga];
}

function RestError(response) {
  this.status = response.status;
  this.message = `Server returned code ${response.status}`;
  this.details = () => response.json().then(
    (details) => details,
    () => this.message);
}
RestError.prototype = Object.create(RestError.prototype);
RestError.prototype.constructor = RestError;

function throwMessageOnError(responsePromise) {
  return responsePromise.then((response) => {
    if (!response.ok) throw new RestError(response);
    return responsePromise;
  });
}

export function checkedFetch(input, init) {
  return throwMessageOnError(fetch(input, init));
}


const defaultFetchOptions = () => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function fetchWithCredentials(input, init) {
  const opts = defaultFetchOptions();
  const jwtToken = getJwtToken();
  if (jwtToken) {
    _.merge(opts, { headers: { Authorization: `Bearer ${jwtToken}` } });
  }
  _.merge(opts, init);

  return checkedFetch(input, opts).catch((e) => {
    if (e instanceof RestError && e.status === 403) {
      deleteJwtToken();
      browserHistory.push(loginPage());
    } else {
      throw e;
    }
  });
}
