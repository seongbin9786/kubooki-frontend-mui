import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

const GAP_FOR_HIDE = 20;

const getCircleSize = ismobile => ismobile ? 48 : 56;

const getBottomMargin = (ismobile, index, open) => {
  if (!open) return GAP_FOR_HIDE;

  let baseMargin = 24, marginBtwCircles = 8;

  return baseMargin + (getCircleSize(ismobile) + marginBtwCircles) * (index + 1);
};

const RootBtn = styled(Button)`
  && {
    position: fixed;
    transition: all 0.3s;

    width: ${({ ismobile }) => getCircleSize(ismobile) + 'px'};
    height: ${({ ismobile }) => getCircleSize(ismobile) + 'px'};

    right: ${GAP_FOR_HIDE + 'px'};

    bottom: ${({ ismobile, index, open }) => getBottomMargin(ismobile, index, open) + 'px'};

    ${({ open }) => !open && ' box-shadow: none; '};
  }
`;

const Title = styled(Typography)`
  && {
    width: 30px;
  }
`;

function FabNavItem({ name, navigateTo, open, ismobile, index }) {
  return (
    <RootBtn
      variant="fab"
      color="primary"
      onClick={navigateTo(name)}
      open={open}
      index={index}
      ismobile={ismobile ? 'ismobile' : undefined}
    >
      <Title color='inherit'>{name}</Title>
    </RootBtn>
  );
}

export default FabNavItem;