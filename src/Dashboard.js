import React from 'react';
import { withStyles } from '@material-ui/core';
import DashboardNav from './DashboardNav';

import TabList from './DashboardTabConfig';
import { globalUser as user } from './store';
import Spacing from './Spacing';
import { smallRootWithPadding } from './styles';

const styles = {
  smallRootWithPadding,
};

function Dashboard({ classes, history, location: { pathname } }) {
  const tabsForUser = TabList.filter(({ role }) => user.hasRole(role));
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

export default withStyles(styles)(Dashboard);