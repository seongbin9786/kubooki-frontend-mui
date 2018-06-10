import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export default ({ variant, color, ...props }) => (
  <Button variant={variant ? variant : 'fab'} color={color ? color : 'secondary'} {...props}>
    <DeleteIcon />
  </Button>
);