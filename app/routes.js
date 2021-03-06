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
      name: 'homepage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homepage', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/viewresult/:slug',
      name: 'viewResult',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ViewResult/reducer'),
          System.import('containers/ViewResult/sagas'),
          System.import('containers/ViewResult'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('viewResult', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/mypolls',
      name: 'myPolls',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MyPolls/reducer'),
          System.import('containers/MyPolls/sagas'),
          System.import('containers/MyPolls'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('myPolls', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/viewpoll/:slug',
      name: 'viewPoll',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ViewPoll/reducer'),
          System.import('containers/ViewPoll/sagas'),
          System.import('containers/ViewPoll'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('viewPoll', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/signin',
      name: 'signIn',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignIn/reducer'),
          System.import('containers/SignIn/sagas'),
          System.import('containers/SignIn'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signIn', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/signup',
      name: 'signUp',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignUp/reducer'),
          System.import('containers/SignUp/sagas'),
          System.import('containers/SignUp'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signUp', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/newpoll',
      name: 'newPoll',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/NewPoll/reducer'),
          System.import('containers/NewPoll/sagas'),
          System.import('containers/NewPoll'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('newPoll', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
