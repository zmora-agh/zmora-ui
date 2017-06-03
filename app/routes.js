// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import withProps from 'recompose/withProps';

import { getAsyncInjectors } from 'utils/asyncInjectors';
import { exactOnly, fetchProblemName, fetchContestName } from './utils/routing';
import { loginPage, profilePage } from './local-urls';
import { requireAuth } from './utils/auth';


const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const loadExactModule = (cb) => (componentModule) => {
  cb(null, exactOnly(componentModule.default));
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
      onEnter: requireAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ContestsPage/sagas'),
          import('containers/ContestsPage/reducer'),
          import('containers/ContestsPage'),
        ]);

        const renderRoute = loadExactModule(cb);

        importModules.then(([sagas, contestsPageReducer, component]) => {
          injectSagas(sagas.default);
          injectReducer('contestsPage', contestsPageReducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: ':contest_id',
          name: 'contestPage',
          onEnter: requireAuth,
          prettifyParam: fetchContestName,
          getComponent(location, cb) {
            const importModules = Promise.all([
              import('containers/ContestPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
          childRoutes: [
            {
              path: 'problems',
              name: 'Problems',
              onEnter: requireAuth,
              getComponent(location, cb) {
                const importModules = Promise.all([
                  import('containers/ProblemsPage'),
                ]);

                const renderRoute = loadExactModule(cb);

                importModules.then(([component]) => {
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
              childRoutes: [
                {
                  path: ':problem_id',
                  name: 'Problem',
                  prettifyParam: fetchProblemName,
                  onEnter: requireAuth,
                  getComponent(location, cb) {
                    const importModules = Promise.all([
                      import('containers/ProblemPage'),
                      import('containers/ProblemSubmitsPage/sagas'),
                    ]);

                    importModules.then(([component, sagas]) => {
                      injectSagas(sagas.default);
                      cb(null, withProps(() => ({ tab: 'content' }))(component.default));
                    });

                    importModules.catch(errorLoading);
                  },
                },
              ],
            }, {
              path: 'results',
              name: 'Results',
              onEnter: requireAuth,
              getComponent(location, cb) {
                import('containers/ContestResultsPage')
                  .then(loadModule(cb))
                  .catch(errorLoading);
              },
            }, {
              path: 'questions',
              name: 'Questions',
              onEnter: requireAuth,
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
      path: '/logout',
      name: 'Logout',
      getComponent(location, cb) {
        import('containers/LogoutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: loginPage(),
      name: 'Authentication',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/sagas'),
          import('containers/Register/sagas'),
          import('containers/AuthPage/reducer'),
          import('containers/AuthPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([loginSagas, registerSagas, authPageReducer, component]) => {
          injectSagas(loginSagas.default);
          injectSagas(registerSagas.default);
          injectReducer('auth', authPageReducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: profilePage(),
      name: 'Profile',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ProfilePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
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
