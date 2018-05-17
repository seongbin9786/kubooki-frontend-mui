import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { TabList } from './TabConfig';

const styles = theme => ({
  Paper: {
    padding: 20,
    margin: theme.spacing.unit * 1,
  }
});

const NewsList = ({ classes, location: { pathname } }) => {
  const index = TabList.findIndex(([, tabPath]) => tabPath === pathname);
  if (index === -1) return null;

  const [currentTab] = TabList[index];

  return (
    <Paper className={classes.Paper}>
      <Typography
        elevation={4}
        variant='subheading'
      >
        현재 탭: {currentTab}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(withRouter(NewsList));