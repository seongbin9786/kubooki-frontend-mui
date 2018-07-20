import React from 'react';
import styled from 'styled-components';
import { Button, Typography, withWidth } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

import theme from '../../configs/ThemeConfig';
import FaIcon from '../FaIcon';

const Root = styled.div`
  margin-top: ${theme.spacing.unit + 'px'};
  padding: ${theme.spacing.unit + 'px'};
  padding-left: ${theme.spacing.unit * 3 + 'px'};
  display: flex;
  justify-content: space-between;

   ${({ bottomMargin }) => bottomMargin && `margin-bottom: ${bottomMargin};`};

   ${({ color }) => color && `color: ${color};`};

   ${({ backgroundColor }) => `background-color: ${backgroundColor || grey[100]};`};

   ${({ dontLeftHighlight }) => dontLeftHighlight && `
      border-left: 8px solid;
      border-color: ${theme.palette.primary.main};
   `};
`;

const SortTitle = styled(Typography)`
  && {
    line-height: 2rem;
  }
`;

const SortBtn = styled(Button)`
  && {
    min-height: 13px;
    min-widht: 13px;
  }
`;

function SortBar({ dontLeftHighlight, backgroundColor, color, bottomMargin, tabName, width }) {
  return (
    <Root
      dontLeftHighlight={dontLeftHighlight}
      backgroundColor={backgroundColor}
      color={color}
      bottomMargin={bottomMargin}
    >
      <SortTitle variant={width === 'xs' ? 'subheading' : 'title'}>
        {tabName}
      </SortTitle>
      <SortBtn>
        <FaIcon icon='lg-caret-down' />
      </SortBtn>
    </Root>
  );
};

export default withWidth()(SortBar);