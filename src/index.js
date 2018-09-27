import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { sessionService } from 'redux-react-session';
import { MuiThemeProvider } from '@material-ui/core/styles';

import reducers from './modules';
import theme from './configs/ThemeConfig';
import Routes from './Routes';

const useReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, useReduxDevTools, applyMiddleware(reduxThunk));

sessionService.initSessionService(store)
    .then(() => console.log('[sessionService] LOAD successful!'))
    .catch(() => console.log('[sessionService] LOAD failed!'));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Routes />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);