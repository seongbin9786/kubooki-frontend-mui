import React from 'react';
import { withStyles } from '@material-ui/core';
import FlatButton from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  selectedNum: {
    color: theme.palette.primary.main,
    minWidth: 16,
    maxWidth: 16,
  },
  num: {
    color: grey[300],
    minWidth: 16,
    maxWidth: 16,
  },
});

function PageItem({ classes, value, selected, handleClick }) {
  return (
    <FlatButton
      className={selected ? classes.selectedNum : classes.num}
      onClick={handleClick}
    >
      {value}
    </FlatButton >
  );
}

export default withStyles(styles)(PageItem);