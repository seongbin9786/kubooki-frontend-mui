import React from 'react';
import { withStyles } from '@material-ui/core';
import DashboardNav from './DashboardNav';
import { withRouter } from 'react-router-dom';

import TabList from './DashboardTabConfig';
import { globalUser as user } from './store';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '20px',
  },
});
/*
  <요구 사항>

  /dashboard/events
  이벤트 관리

  /dashboard/popups
  팝업 관리

  /dashboard/attendance
  출석 관리

  /dashboard/journalists
  기자 관리

  /dashboard/corrections
  들어온 정정 요청
*/
function Dashboard({ classes, history, location: { pathname } }) {
  const tabsForUser = TabList.filter(({ role }) => user.hasRole(role));
  const index = tabsForUser.findIndex(({ link }) => link === pathname);
  const { component: Component } = tabsForUser[index];
  console.log(Component);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Component />
      </div>
      <DashboardNav
        tabList={tabsForUser}
        index={index}
        history={history}
        user={user}
      />
    </React.Fragment>
  );
}

export default withStyles(styles)(withRouter(Dashboard));