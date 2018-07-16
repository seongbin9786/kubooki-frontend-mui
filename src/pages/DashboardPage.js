import React from 'react';
import { withStyles } from '@material-ui/core';
import DashboardNav from '../components/navs/DashboardNav';

import TabList from '../configs/DashboardTabConfig';
import { globalUser as user } from '../modules/store';
import Spacing from '../styles/Spacing';
import { smallRootWithPadding } from '../styles/styles';

const styles = {
  smallRootWithPadding,
};

function DashboardPage({ classes, history, location: { pathname } }) {
  const tabsForUser = TabList.filter(({ role }) => user.hasRole(role));

  if (tabsForUser.length === 0)
    return <div>권한이 없습니다.</div>;

  const index = tabsForUser.findIndex(({ link }) => link === pathname);
  const { component: Component } = tabsForUser[index];

  return (
    <React.Fragment>
      <div className={classes.smallRootWithPadding}>
        <Component />
      </div>
      <DashboardNav
        tabList={tabsForUser}
        index={index}
        history={history}
        user={user}
      />
      <Spacing height={57} />
    </React.Fragment>
  );
}

export default withStyles(styles)(DashboardPage);