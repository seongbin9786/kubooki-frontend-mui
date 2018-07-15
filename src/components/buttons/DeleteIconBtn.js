import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

export default ({ sm, variant, color, ...props }) => {
  const Component = sm ? IconButton : Button;

  return (
    <Component variant={variant ? variant : 'fab'} color={color ? color : 'secondary'} {...props}>
      <DeleteIcon />
    </Component>
  );
};