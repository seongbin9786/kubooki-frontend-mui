import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import MainPage from './MainPage';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' component={MainPage} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);
