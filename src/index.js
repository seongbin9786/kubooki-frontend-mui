import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import MainPage from './MainPage';
import NewsDetail from './NewsDetail';
import NewsWritePage from './NewsWritePage';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/news/write' component={NewsWritePage} />
        <Route path='/news/*' component={NewsDetail} />
        <Route path='/' component={MainPage} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);
