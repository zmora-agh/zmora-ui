import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import { browserHistory } from 'react-router';

import { GRAPHQL_API_URL } from './constants';
import { getJwtToken, haveJwtToken, deleteJwtToken } from './utils/auth';
import { loginPage } from './local-urls';


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
      if (body.errors && body.errors.some((e) => e.status === 401 || e.status === 403)) {
        deleteJwtToken();
        browserHistory.replace(loginPage(browserHistory.getCurrentLocation().pathname));
      } else {
        next();
      }
    });
  },
};
/* eslint-enable no-param-reassign */

const createApolloClient = () => {
  const networkInterface = createNetworkInterface({
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

const client = createApolloClient();
export { ApolloProvider, client };
