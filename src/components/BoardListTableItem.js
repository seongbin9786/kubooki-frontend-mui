import React from 'react';
import { Link } from 'react-router-dom';
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

function SimpleTable({ item, linkTemplate }) {
  const { id, title, writer, creationDate, views } = item;
  const url = `${linkTemplate}/${id}`;

  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>
        <Link to={url}>{title}</Link>
      </TableCell>
      <TableCell>{writer.name}</TableCell>
      <TableCell>{creationDate}</TableCell>
      <TableCell numeric>{views}</TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(SimpleTable);