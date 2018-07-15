import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

import BoardListTableItem from './BoardListTableItem';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  head: {
    backgroundColor: theme.palette.primary.main,
    color: 'white !important',
  }
});

function SimpleTable({ classes, rows, location: { pathname } }) {
  console.log('[table] path: ', pathname);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.head}>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell type='head'>제목</TableHeaderCell>
            <TableHeaderCell>작성자</TableHeaderCell>
            <TableHeaderCell>등록일</TableHeaderCell>
            <TableHeaderCell numeric>조회수</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) =>
            <BoardListTableItem
              item={row}
              key={index}
              linkTemplate={pathname}
            />
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

const TableHeaderCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

export default withStyles(styles)(withRouter(SimpleTable));