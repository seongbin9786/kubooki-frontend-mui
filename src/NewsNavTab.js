import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TabList } from './TabConfig';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const CenteredTabs = ({ classes, history, location: { pathname } }) => {
  const index = TabList.findIndex(([, tabPath]) => tabPath === pathname);
  if (index === -1) return null;

  const tabs = TabList.map(([name, path]) =>
    <Tab
      label={name}
      key={name}
      onClick={() => history.push(path)}
    />
  );

  return (
    <Paper className={classes.root}>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        fullWidth
        centered
      >
        {tabs}
      </Tabs>
    </Paper>
  );
};

export default withStyles(styles)(withRouter(CenteredTabs));
