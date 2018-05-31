import React from 'react';
import { withStyles, Button, IconButton } from '@material-ui/core';

export default withStyles()(({ btnStr, type, sm, onlyIcon, ...props }) => {
  const Component = onlyIcon ? IconButton : Button;

  return (
    <Component {...props}>
      {onlyIcon ? '' : btnStr}<i className={`fas fa-${sm ? 'sm' : 'md'} fa-${type}`}></i>
    </Component>
  );
});