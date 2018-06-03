import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable({ classes, item }) {
  const { id, title, writer, creationDate, views } = item;
  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{writer}</TableCell>
      <TableCell>{creationDate}</TableCell>
      <TableCell numeric>{views}</TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(SimpleTable);