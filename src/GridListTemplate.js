import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    maxWidth: 1280,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 80,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  oneline: {
    marginLeft: 12,
    height: '50px !important',
  },
  spacing: {
    marginTop: '40px',
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
  moreButton: {
    width: '100%',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 30,
    height: 48,
    fontSize: 24,
    borderRadius: 12
  }
});

export default withStyles(styles)(withRouter(({ classes, title, titleType, subHeader, items, moreBtnStr, spacing }) => {

  return (
    <React.Fragment>
      <div className={classes.spacing}></div>
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          spacing={spacing ? spacing : 16}
        >
          {title ? <Grid item xs={12} className={classes.oneline}><Typography variant={titleType}>{title}</Typography></Grid> : null}
          {subHeader ? <Grid item xs={12} className={classes.oneline}>{subHeader}</Grid> : null}
          {items}
        </GridList >

        <Button
          variant="raised"
          color="primary"
          className={classes.moreButton}
        >
          {moreBtnStr}
        </Button>
      </div >
    </React.Fragment>
  );
}));
