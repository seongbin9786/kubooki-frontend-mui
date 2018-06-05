import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

import BoardListTable from './BoardListTable';
import Pagination from './Pagination';

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

function BoardList({ classes, boardTitle, boardList }) {
  const { totalItems, list } = boardList;

  return (
    <div className={classes.root}>
      <Typography variant='display1'>{boardTitle}</Typography>
      <BoardListTable rows={list} />
      <div className={classes.pagination}>
        <Pagination total={totalItems} />
      </div>
    </div>
  );
}

export default withStyles(styles)(BoardList);