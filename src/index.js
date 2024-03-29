import React from 'react';
import ReactDOM from 'react-dom';
import { setJwtInterceptor, setAccessTokenForAuthorizationHeader } from './modules/api';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { sessionService } from 'redux-react-session';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { validateSession } from './modules/SessionActions';
import reducers from './modules';
import theme from './configs/ThemeConfig';
import Routes from './Routes';

const useReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, useReduxDevTools, applyMiddleware(reduxThunk));

const sessionServiceOptions = {
  refreshOnCheckAuth: false,
  redirectPath: '/',
  driver: 'LOCALSTORAGE',
  validateSession
};

sessionService.initSessionService(store, sessionServiceOptions)
  .then(() => console.log('[sessionService] LOAD successful!'))
  .catch(() => console.log('[sessionService] LOAD failed!'));

setAccessTokenForAuthorizationHeader();

setJwtInterceptor();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);