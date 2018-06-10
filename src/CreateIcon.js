import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default ({ variant, color, ...props }) => (
  <Button variant={variant ? variant : 'fab'} color={color ? color : 'primary'} {...props}>
    <Icon>edit_icon</Icon>
  </Button>
);