import React from 'react';
import { withStyles, Button, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

import theme from './ThemeConfig';

const styles = theme => ({
  sortBar: {
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'space-between',
  },
  sortTitle: {
    lineHeight: '2rem',
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: 500,
    fontSize: '1.4rem',
  },
  sortBtn: {
    minHeight: 13,
    minWidth: 13,
  },
});

// Material-UI에서 테마 색상 가져오는 걸로 변경해야 함
const themeColor = theme.palette.primary.main;

function SortBar({ classes, tabName, color, backgroundColor, dontLeftHighlight }) {
  return (
    <div className={classes.sortBar}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : grey[100],
        color: color ? (color === 'primary' ? themeColor : color) : 'white',
        borderLeft: !dontLeftHighlight ? '8px solid' : null,
        borderColor: !dontLeftHighlight ? themeColor : null
      }}
    >
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