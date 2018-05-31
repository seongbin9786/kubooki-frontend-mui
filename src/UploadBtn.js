import React from 'react';
import FaIconBtn from './FaIconBtn';

// onClick, variant, color
export default ({ btnStr, color, variant, ...props }) => (
  <FaIconBtn
    type='upload'
    color={color ? color : 'default'}
    variant={variant ? variant : 'raised'}
    btnStr={btnStr}
    {...props}
  />
);