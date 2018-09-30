import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '@material-ui/core';

import theme from '../../configs/ThemeConfig';

const getCircleSize = ismobile => ismobile ? 56 : 64;

const RootBtn = styled(Button)`
  && {
    position: fixed;
    
    bottom: ${theme.spacing.unit * 2 + 'px'};
    right: ${theme.spacing.unit * 2 + 'px'};

    width: ${({ ismobile }) => getCircleSize(ismobile) + 'px'};
    height: ${({ ismobile }) => getCircleSize(ismobile) + 'px'};
  }
`;

export default function FabNavMainItem({ handleClick, ismobile }) {
  return (
    <RootBtn
      variant="fab"
      color="primary"
      aria-label="navigate"
      onClick={handleClick}
      ismobile={ismobile}
    >
      <Icon>keyboard_arrow_right</Icon>
    </RootBtn>
  );
}