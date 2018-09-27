import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import NaverLoginCallbackPage from './pages/NaverLoginCallbackPage';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EventDetailPage from './pages/EventDetailPage';
import FAQPage from './pages/FAQPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsWritePage from './pages/NewsWritePage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DashboardPage from './pages/DashboardPage';
import MyPage from './pages/MyPage';
import MeetingLogPage from './pages/MeetingLogPage';
import MeetingLogReadPage from './pages/MeetingLogReadPage';
import AnnouncementPage from './pages/AnnouncementPage';
import AnnouncementReadPage from './pages/AnnouncementReadPage';
import ApplyPage from './pages/ApplyPage';

export default () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/login/naver" component={NaverLoginCallbackPage} />
                <Route path='/announcements/:id' component={AnnouncementReadPage} />
                <Route path='/announcements' component={AnnouncementPage} />
                <Route path='/logs/meeting/:id' component={MeetingLogReadPage} />
                <Route path='/logs/meeting' component={MeetingLogPage} />
                <Route path='/account' component={MyPage} />
                <Route path='/dashboard' component={DashboardPage} />
                <Route path='/terms' component={TermsOfServicePage} />
                <Route path="/apply" component={ApplyPage} />
                <Route path='/faq' component={FAQPage} />
                <Route path='/events/:id' component={EventDetailPage} />
                <Route path='/events' component={EventPage} />
                <Route path='/news/write' component={NewsWritePage} />
                <Route path='/news' component={NewsDetailPage} />
                <Route path='/' component={MainPage} />
            </Switch>
        </Layout>
    </BrowserRouter>
);
