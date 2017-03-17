// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'Home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/contests',
      name: 'Contests',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ContestsPage/reducer'),
          import('containers/ContestsPage/sagas'),
          import('containers/ContestsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('contestsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/contest/page',
          name: 'Nested Page',
          getComponent(location, cb) {
            import('containers/DeeplyNestedPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          childRoutes: [
            {
              path: '/contest/page/page',
              name: 'Super Nested Page',
              getComponent(location, cb) {
                import('containers/DeeplyNestedPage')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
      ],
    }, {
      path: '/ranking',
      name: 'Ranking',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RankingPage/reducer'),
          import('containers/RankingPage/sagas'),
          import('containers/RankingPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('rankingPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/news',
      name: 'News',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/NewsPage/reducer'),
          import('containers/NewsPage/sagas'),
          import('containers/NewsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
