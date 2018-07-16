import React from 'react';
import styled from 'styled-components';
import { withWidth, Typography } from '@material-ui/core';

import '../styles/content.css';
import CommentList from '../containers/CommentList';
import Spacing from '../styles/Spacing';
import { commentList, userDemo } from '../modules/store';
import { smallRootWithPadding } from '../styles/styles';
import theme from '../configs/ThemeConfig';

const TitleTypo = styled(Typography)`
  margin-top: ${({ width }) => (width === 'xs' ? 20 : 60) + 'px !important'};
  letter-spacing: -1.5px !important;
  color: #535353 !important;
`;

const WriterBox = styled.div`
  margin-top: 30px;
  padding-left: 20px;
  border-left: 1px solid;
  border-color: ${theme.palette.primary.main};
`;

const WriterPic = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const WrittenBy = styled.span`
  font-size: 18px;
  color: #535353;
`;

const WriterName = styled.span`
  font-size: 20px;
  color: ${theme.palette.primary.main}
`;

const DateTypo = styled(Typography)`
  color: #535353;
  font-weight: 300;
`;

const CounterTypo = styled(Typography)`
  margin-top: 10px;
  color: #535353;
  font-weight: 300;
`;

/*
  id: 1,
  title: '',
  content: '', // html
  creationDate: '31.05.2012',
  lastUpdateDate: '31.05.2012',
  views: 1,
  likes: 1,
*/
function BoardDetail({ item, useComment, useLike, footer, width }) {
  const { title, writer, content, creationDate, lastUpdateDate, views, likes } = item;
  const writerPic = 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg';

  return (
    <div style={smallRootWithPadding}>
      <TitleTypo variant={width === 'xs' ? 'display1' : 'display3'}>{title}</TitleTypo>
      <WriterBox>
        <WriterPic alt={writer} src={writerPic} />
        <WrittenBy> by </WrittenBy>
        <WriterName>{writer}</WriterName>
        <DateTypo>{'등록: ' + creationDate}</DateTypo>
        <DateTypo>{'최종 수정: ' + lastUpdateDate}</DateTypo>
        <CounterTypo>{'조회수: ' + views}</CounterTypo>
      </WriterBox>

      <div
        className='article__content'
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {footer ? footer : null}

      {useComment
        ? <CommentList
          list={commentList}
          user={userDemo}
          writebox
          showLoadMoreBtn />
        : <Spacing height={100} />
      }

    </div>
  );
}

export default withWidth()(BoardDetail);