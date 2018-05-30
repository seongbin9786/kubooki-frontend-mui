import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import MainPage from './MainPage';
import EventPage from './EventPage';
import FAQPage from './FAQPage';
import NewsDetail from './NewsDetail';
import NewsWritePage from './NewsWritePage';
import TermsOfService from './TermsOfService';
import Dashboard from './Dashboard';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/terms' component={TermsOfService} />
        <Route path='/faq' component={FAQPage} />
        <Route path='/events' component={EventPage} />
        <Route path='/news/write' component={NewsWritePage} />
        <Route path='/news/*' component={NewsDetail} />
        <Route path='/' component={MainPage} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);
