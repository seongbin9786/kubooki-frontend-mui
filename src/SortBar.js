import React from 'react';
import injectSheet from 'react-jss';
import { Button, Typography, withWidth } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

import theme from './ThemeConfig';
import FaIcon from './FaIcon';

const styles = {
  sortBar: ({
    dontLeftHighlight,
    backgroundColor,
    color,
    bottomMargin
  }) => ({
    marginTop: theme.spacing.unit,
    marginBottom: bottomMargin || null,
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: backgroundColor || grey[100],
    color: color || 'white',
    borderLeft: !dontLeftHighlight ? '8px solid' : null,
    borderColor: !dontLeftHighlight ? theme.palette.primary.main : null
  }),
  sortTitle: {
    lineHeight: '2rem',
  },
  sortBtn: {
    minHeight: 13,
    minWidth: 13,
  },
};

function SortBar({ classes, tabName, width }) {
  return (
    <div className={classes.sortBar}>
      <Typography
        variant={width === 'xs' ? 'subheading' : 'title'}
        className={classes.sortTitle}
      >
        {tabName}
      </Typography>
      <Button className={classes.sortBtn}>
        <FaIcon icon='lg-caret-down' />
      </Button>
    </div>
  );
};

export default injectSheet(styles)(withWidth()(SortBar));