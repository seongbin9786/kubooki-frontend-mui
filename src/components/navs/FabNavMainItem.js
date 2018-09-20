import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '@material-ui/core';

import theme from '../../configs/ThemeConfig';

const getCircleSize = isMobile => isMobile ? 56 : 64;

const RootBtn = styled(Button)`
  && {
    position: fixed;
    
    bottom: ${theme.spacing.unit * 2 + 'px'};
    right: ${theme.spacing.unit * 2 + 'px'};

    width: ${({ isMobile }) => getCircleSize(isMobile) + 'px'};
    height: ${({ isMobile }) => getCircleSize(isMobile) + 'px'};
  }
`;

export default function FabNavMainItem({ handleClick, isMobile }) {
  return (
    <RootBtn
      variant="fab"
      color="primary"
      aria-label="navigate"
      onClick={handleClick}
      isMobile={isMobile}
    >
      <Icon>keyboard_arrow_right</Icon>
    </RootBtn>
  );
}