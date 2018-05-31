import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

export default withStyles()(({ btnStr, type, ...props }) => (
  <Button {...props}>
    {btnStr}&nbsp;<i className={`fas fa-md fa-${type}`}></i>
  </Button>
));