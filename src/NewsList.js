import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

import { TabList } from './TabConfig';

const styles = {
  root: {
    flexGrow: 1,
  },
  Paper: {
    margin: 10,
    padding: 20,
  }
};

const NewsList = ({ classes, location: { pathname } }) => {
  const index = TabList.findIndex(([, tabPath]) => tabPath === pathname);
  const [currentTab] = TabList[index];

  return (
    <div className={classes.root}>
      <Paper>
        <Typography
          variant='subheading'
          className={classes.Paper}
        >
          현재 탭: {currentTab}
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(withRouter(NewsList));