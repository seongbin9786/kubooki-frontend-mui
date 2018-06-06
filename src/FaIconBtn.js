import React from 'react';
import { withStyles, Button, IconButton } from '@material-ui/core';

import FaIcon from './FaIcon';

export default withStyles()(({ btnStr, type, sm, onlyIcon, iconLeft, ...props }) => {
  // IconButton에서 variant가 fab이면 background-color가 적용되지 않음
  const Component = onlyIcon && props.variant !== 'fab' ? IconButton : Button;

  // &nbsp; === \u00A0
  // &nbsp;가 HTML이어야 인식되므로 유니코드로 표현
  return (
    <Component {...props}>
      {iconLeft ? <FaIcon sm={sm} type={type} /> : null}
      {onlyIcon ? '' : (iconLeft ? '\u00A0' : '') + btnStr + (!iconLeft ? '\u00A0' : '')}
      {!iconLeft ? <FaIcon sm={sm} type={type} /> : null}
    </Component>
  );
});