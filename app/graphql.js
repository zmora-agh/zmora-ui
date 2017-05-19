import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import { GRAPHQL_API_URL } from './constants';
import { getJwtToken, haveJwtToken } from './utils/auth';


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
};
/* eslint-enable no-param-reassign */

const createApolloClient = () => {
  const networkInterface = createNetworkInterface({
    uri: GRAPHQL_API_URL,
    queryDeduplication: true,
  });
  networkInterface.use([authMiddleware]);

  return new ApolloClient({
    networkInterface,
    reduxRootSelector: (state) => state.get('apollo'),
    connectToDevTools: process.env.NODE_ENV !== 'production',
  });
};

const client = createApolloClient();
export { ApolloProvider, client };
