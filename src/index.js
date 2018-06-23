import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { jss, JssProvider } from 'react-jss';
import jssCompose from 'jss-compose';

import theme from './ThemeConfig';

import Layout from './Layout';
import MainPage from './MainPage';
import EventPage from './EventPage';
import EventDetailPage from './EventDetailPage';
import FAQPage from './FAQPage';
import NewsDetail from './NewsDetail';
import NewsWritePage from './NewsWritePage';
import TermsOfService from './TermsOfService';
import Dashboard from './Dashboard';
import MyPage from './MyPage';
import MeetingLogPage from './MeetingLogPage';
import MeetingLogReadPage from './MeetingLogReadPage';
import AnnouncementPage from './AnnouncementPage';
import AnnouncementReadPage from './AnnouncementReadPage';

jss.use(jssCompose());

ReactDOM.render(
  <JssProvider jss={jss}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/announcements/:id' component={AnnouncementReadPage} />
            <Route path='/announcements' component={AnnouncementPage} />
            <Route path='/logs/meeting/:id' component={MeetingLogReadPage} />
            <Route path='/logs/meeting' component={MeetingLogPage} />
            <Route path='/account' component={MyPage} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/terms' component={TermsOfService} />
            <Route path='/faq' component={FAQPage} />
            <Route path='/events/:id' component={EventDetailPage} />
            <Route path='/events' component={EventPage} />
            <Route path='/news/write' component={NewsWritePage} />
            <Route path='/news' component={NewsDetail} />
            <Route path='/' component={MainPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('root')
);
