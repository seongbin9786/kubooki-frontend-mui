import React from 'react';
import styled from 'styled-components';
import { withWidth, Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

import FaIcon from './FaIcon';
import theme from '../configs/ThemeConfig';

const Root = styled(Card)`
  && {
    margin: ${theme.spacing.unit + 'px'};
    transition: transform 0.15s;

    &:hover {
      transform: translateY(-15px);
      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 
         0px 5px 8px 0px rgba(0, 0, 0, 0.14), 
         0px 1px 14px 0px rgba(0, 0, 0, 0.12)
    }

    ${({ width }) => width !== 'xs' && `margin: ${theme.spacing.unit * 3 + 'px'};`};
  }
`;

const MarginBottomRoot = styled(Grid)`
  && {
    height: auto !important;
    margin-bottom: 80px;
    
    @media (max-width: 600px) {
      margin-bottom: 50px;
    }
  }
`;

const Image = styled(CardMedia)`
  && {
    height: 100%;
    padding-top: 70%;
  }
`;

const Title = styled(Typography)`
  && {
    margin-bottom: 10px;
  }
`;

const Details = styled.div`
  color: #777777;
  margin-bottom: 5px;
`;

const StyledIcon = styled(FaIcon)`
  width: 16px;
  margin-right: 10px;
`;

/*
  id: '1',
  title: '에버랜드 썸머 스플래쉬 제휴',
  thumbnail: 'http://cfile25.uf.tistory.com/image/24553738575E014D18A049',
  startDate: '05.06.2018',
  endDate: '30.08.2018',
  prize: '학생증 제시 30% 할인',
  resultDate: '-',
*/
function EventItem({ event, handleClick, width }) {
  const { id, title, thumbnail, startDate, endDate, prize, resultDate } = event;

  return (
    <MarginBottomRoot item xs={12} sm={6} lg={4}>
      <Root onClick={handleClick(id)} width={width}>
        <Image image={thumbnail} title={title} />
        <CardContent>
          <Title variant="headline">{title}</Title>

          <Details>
            <StyledIcon icon='sm-calendar-alt' /><span>{startDate + ' - ' + endDate}</span>
          </Details>

          <Details>
            <StyledIcon icon='sm-gift' /><span>{prize}</span>
          </Details>

          {resultDate && resultDate !== '-' &&
            <Details>
              <StyledIcon icon='sm-bullhorn' /><span>{resultDate + ' 발표'}</span>
            </Details>
          }
        </CardContent>
      </Root>
    </MarginBottomRoot>
  );
}

export default withWidth()(EventItem);
