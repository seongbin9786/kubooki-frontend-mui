import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

export default ({ sm, variant, color, ...props }) => {
  const Component = sm ? IconButton : Button;

  return (
    <Component variant={variant ? variant : 'fab'} color={color ? color : 'primary'} {...props}>
      <AddIcon />
    </Component>
  );
};