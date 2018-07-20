import React from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow } from '@material-ui/core';

function BoardListLargeItem({ item, pathname }) {
  const { id, title, writer, creationDate, views } = item;
  const url = `${pathname}/${id}`;

  return (
    <TableRow>
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

export default BoardListLargeItem;