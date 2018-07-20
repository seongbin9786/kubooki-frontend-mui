import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import { Typography } from '@material-ui/core';

import LoadMoreBtn from '../components/buttons/LoadMoreBtn';

const Root = styled.div`
  ${({ noBottomMargin, noTopMargin }) => `
    margin: 0 auto;
    max-width: 1280px;
    margin-top: ${noTopMargin ? 0 : '40px'};
    margin-bottom: ${noBottomMargin ? 0 : '80px'};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `};
`;

const StyledGridRow = styled(Grid)`
  && {
    width: 100% !important;
    height: auto !important;
    padding: 0px !important;
    margin-left: 0px !important;
  }
`;

const StyledGridList = styled(GridList)`
  && {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const GridListTemplate = ({ title, titleType, subHeader, items, spacing, btnStr, noMoreLoadBtn }) => (
  <Root>
    <StyledGridList spacing={spacing || 16}>
      {title
        ? (
          <StyledGridRow item xs={12}>
            <Typography variant={titleType}>{title}</Typography>
          </StyledGridRow>
        )
        : null
      }
      {subHeader
        ? <StyledGridRow item xs={12}>{subHeader}</StyledGridRow>
        : null
      }
      {items}
    </StyledGridList>

    {noMoreLoadBtn ? null : <LoadMoreBtn btnStr={btnStr} />}
  </Root>
);

export default GridListTemplate;
