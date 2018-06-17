import React from 'react';
import { withStyles, Button, IconButton } from '@material-ui/core';

import FaIcon from './FaIcon';

export default withStyles()(({ btnStr, icon, onlyIcon, iconLeft, ...props }) => {
  // IconButton에서 variant가 fab이면 background-color가 적용되지 않음
  const Component = onlyIcon && props.variant !== 'fab' ? IconButton : Button;
  const spaceStr = '\u00A0';

  return (
    <Component {...props}>
      {iconLeft ? <FaIcon icon={icon} /> : null}
      {onlyIcon ? '' : (iconLeft ? spaceStr : '') + btnStr + (!iconLeft ? spaceStr : '')}
      {!iconLeft ? <FaIcon icon={icon} /> : null}
    </Component>
  );
});