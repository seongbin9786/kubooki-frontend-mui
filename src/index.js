import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { create } from 'jss';
import jssExtend from 'jss-extend';
import JssProvider from 'react-jss/lib/JssProvider';
import { jssPreset, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

// Configure JSS
// jssExtend가 먼저오지 않으면 jss-camel-case를 원래 CSS 이름으로 변경해주지 않음
const jss = create({ plugins: [jssExtend(), ...jssPreset().plugins] });

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5b80b2'
    },
  },
  typography: {
    fontFamily: '\'Nanum Square\', sans-serif',
  }
});

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
