import React from 'react';
import { withStyles, Button, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  sortBar: {
    backgroundColor: grey[200],
    color: 'white',
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'space-between',
  },
  sortTitle: {
    lineHeight: '2rem',
  },
  sortBtn: {
    minHeight: 13,
    minWidth: 13,
  },
});

function SortBar({ classes, tabName }) {
  return (
    <div className={classes.sortBar}>
      <Typography
        variant='subheading'
        className={classes.sortTitle}
      >
        {tabName}
      </Typography>
      <Button className={classes.sortBtn}><i className="fas fa-lg fa-caret-down"></i></Button>
    </div>
  );
};

export default withStyles(styles)(SortBar);