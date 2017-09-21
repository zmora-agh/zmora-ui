import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import { browserHistory } from 'react-router';
import Raven from 'raven-js';

import { GRAPHQL_API_URL } from './constants';
import { getJwtToken, haveJwtToken, deleteJwtToken } from './utils/auth';
import { loginPage } from './local-urls';
import { setFatalError } from './containers/App/actions';


/* eslint-disable no-param-reassign */
const authMiddleware = {
  applyMiddleware(req, next) {
    if (!haveJwtToken()) next();

    if (!req.options.headers) {
      req.options.headers = {};
    }

    req.options.headers.authorization = `Bearer ${getJwtToken()}`;
    next();
  },
  applyAfterware({ response }, next) {
    response.clone().json().then((body) => {
      if (body.errors && body.errors.some((e) => e.status === 401)) {
        deleteJwtToken();
        browserHistory.replace(loginPage(browserHistory.getCurrentLocation().pathname));
      } else {
        next();
      }
    });
  },
};
/* eslint-enable no-param-reassign */

const logMiddleware = (store) => ({
  applyAfterware({ response }, next) {
    if (response.status === 500) {
      response.json().then((data) => {
        const message = 'Error while receiving graphql response';
        console.error(message, response, data); // eslint-disable-line no-console
        store.dispatch(setFatalError());
        Raven.captureException(new Error(message), { extra: { response, data } });
      });
    } else {
      next();
    }
  },
});

const createApolloClient = () => {
  networkInterface = createNetworkInterface({
    uri: GRAPHQL_API_URL,
    queryDeduplication: true,
  });
  networkInterface.use([authMiddleware]);
  networkInterface.useAfter([authMiddleware]);

  return new ApolloClient({
    networkInterface,
    reduxRootSelector: (state) => state.get('apollo'),
    connectToDevTools: process.env.NODE_ENV !== 'production',
  });
};

const initializeApolloLogging = (store) => networkInterface.useAfter([logMiddleware(store)]);

let networkInterface = null;
const client = createApolloClient();
export { ApolloProvider, client, initializeApolloLogging };
