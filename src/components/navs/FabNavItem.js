import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

const GAP_FOR_HIDE = 20;

const getCircleSize = isMobile => isMobile ? 48 : 56;

const getBottomMargin = (isMobile, index, open) => {
  if (!open) return GAP_FOR_HIDE;

  let baseMargin = 24, marginBtwCircles = 8;

  return baseMargin + (getCircleSize(isMobile) + marginBtwCircles) * (index + 1);
}

const RootBtn = styled(Button)`
  && {
    position: fixed;
    transition: all 0.3s;

    width: ${({ isMobile }) => getCircleSize(isMobile) + 'px'};
    height: ${({ isMobile }) => getCircleSize(isMobile) + 'px'};

    right: ${GAP_FOR_HIDE + 'px'};

    bottom: ${({ isMobile, index, open }) => getBottomMargin(isMobile, index, open) + 'px'};

    ${({ open }) => !open && ` box-shadow: none; `};
  }
`;

const Title = styled(Typography)`
  && {
    width: 30px;
  }
`;

function FabNavItem({ name, navigateTo, open, isMobile, index }) {
  return (
    <RootBtn
      variant="fab"
      color="primary"
      onClick={navigateTo(name)}
      open={open}
      index={index}
      isMobile={isMobile}
    >
      <Title color='inherit'>{name}</Title>
    </RootBtn>
  );
}

export default FabNavItem;