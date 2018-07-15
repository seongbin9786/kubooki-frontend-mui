import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import theme from '../configs/ThemeConfig';

function BoardListMobileItem({ item, linkTemplate }) {
  const { id, title, writer, creationDate } = item;
  const url = `${linkTemplate}/${id}`;
  const writerUrl = `/accounts/${writer.id}`;

  const Root = styled.div`
    position: relative;
    padding: ${theme.spacing.unit + 'px'};
  `;

  const Title = styled(Typography)`
    && {
      color: ${theme.palette.primary.main};
      max-width: 70%;
    }
  `;

  const NoUndLink = styled(Link)`
    && {
      text-decoration: none;
      line-height: 0em;
    }
  `;

  const InfoContainer = styled.div`
    position: absolute;
    margin-top: ${theme.spacing.unit * 2 + 'px'};
    bottom: ${theme.spacing.unit + 'px'};
    right: ${theme.spacing.unit + 'px'};

    max-width: 30%;
    display: flex;
  `;

  const Avatar = styled.img`
    width: 10px;
    height: 10px;
    border-radius: 50px;

    margin-top: 2px;
    margin-right: 4px;

    display: inline;
  `;

  const NameTypo = styled(Typography)`
    && {
      display: inline;
      color: ${theme.palette.primary.main} !important;

      margin-right: 4px;
    }
  `;

  return (
    <Root>
      <NoUndLink to={url}><Title variant='subheading'>{title}</Title></NoUndLink>
      <InfoContainer>
        <Avatar src={writer.avatar} />
        <NoUndLink to={writerUrl}><NameTypo variant='caption'>{writer.name}</NameTypo></NoUndLink>
        <Typography variant='caption'>{creationDate}</Typography>
      </InfoContainer>
    </Root>
  );
}

export default BoardListMobileItem;