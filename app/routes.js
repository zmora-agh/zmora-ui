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
          path: ':contest_id',
          name: 'contestSummaryPage',
          getComponent(location, cb) {
            import('containers/ContestSummaryPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
          childRoutes: [
            {
              path: 'problems',
              name: 'Problems',
              getComponent(location, cb) {
                import('containers/ProblemsPage')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
              childRoutes: [
                {
                  path: ':problem_id',
                  name: 'Problem',
                  getComponent(location, cb) {
                    import('containers/ProblemContents')
                      .then(loadModule(cb))
                      .catch(errorLoading);
                  },
                  childRoutes: [
                    {
                      path: 'submits',
                      name: 'Submits',
                      getComponent(location, cb) {
                        import('containers/ProblemSubmitsPage')
                          .then(loadModule(cb))
                          .catch(errorLoading);
                      },
                      childRoutes: [
                        {
                          path: ':submit_id',
                          name: 'Submit',
                          getComponent(location, cb) {
                            import('containers/SubmitDetailsPage')
                              .then(loadModule(cb))
                              .catch(errorLoading);
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            }, {
              path: 'ranking',
              name: 'Ranking',
              getComponent(location, cb) {
                import('containers/RankingPage')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            }, {
              path: 'questions',
              name: 'Questions',
              getComponent(location, cb) {
                import('containers/QuestionsPage')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
      ],
    }, {
      path: '/about',
      name: 'About Us',
      getComponent(location, cb) {
        import('containers/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/problem',
      name: 'problemPage',
      getComponent(location, cb) {
        import('containers/ProblemPage')
          .then(loadModule(cb))
          .catch(errorLoading);
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
