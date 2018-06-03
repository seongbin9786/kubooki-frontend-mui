import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

import { boardListViewData } from './store';
import Pagination from './Pagination';
import BoardListTable from './BoardListTable';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '20px',
  },
  pagination: {
    marginTop: 20,

    display: 'flex',
    justifyContent: 'center'
  }
});

function BoardList({ classes }) {
  const { title, totalItems, list } = boardListViewData;

  return (
    <div className={classes.root}>
      <Typography variant='display1'>{title}</Typography>
      <BoardListTable rows={list} />
      <div className={classes.pagination}>
        <Pagination total={totalItems} />
      </div>
    </div>
  );
}

export default withStyles(styles)(BoardList);