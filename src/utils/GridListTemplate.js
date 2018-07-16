import React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import { Typography } from '@material-ui/core';

import LoadMoreBtn from '../components/buttons/LoadMoreBtn';
import { mediumRoot } from '../styles/styles';

const styles = {
  root: ({ noBottomMargin, noTopMargin }) => ({
    ...mediumRoot,
    marginTop: noTopMargin ? 0 : 40,
    marginBottom: noBottomMargin ? 0 : 80,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }),
  oneline: {
    // Grid 기본 값 오버라이드
    width: '100% !important',
    height: 'auto !important',
    padding: '0 !important',
    marginLeft: '0 !important',
  },
  gridList: {
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  subheader: {
    width: '100%',
  },
};

export default injectSheet(styles)(withRouter(({ classes, title, titleType, subHeader, items, spacing, btnStr, noMoreLoadBtn }) => {
  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          spacing={spacing || 16}
        >
          {title ? <Grid item xs={12} className={classes.oneline}><Typography variant={titleType}>{title}</Typography></Grid> : null}
          {subHeader ? <Grid item xs={12} className={classes.oneline}>{subHeader}</Grid> : null}
          {items}
        </GridList >

        {noMoreLoadBtn ? null : <LoadMoreBtn btnStr={btnStr} />}
      </div >
    </React.Fragment>
  );
}));
