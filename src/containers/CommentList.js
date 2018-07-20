import React from 'react';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

import FlatListTemplate from '../utils/FlatListTemplate';
import CommentItem from '../components/CommentItem';
import CommentWriteBox from '../components/CommentWriteBox';
import LoadMoreBtn from '../components/buttons/LoadMoreBtn';
import FaIcon from '../components/FaIcon';
import theme from '../configs/ThemeConfig';

const Counter = styled.b`
  color: ${theme.palette.primary.main};
`;
/*
  컨테이너로서 가져야 할 역할
  -------------------------
  1. 댓글 목록 가져오기 (최초 / 더 불러오기)

  2. 댓글 작성/수정/제거하기
  => list를 mutate한다.
  => 새로 refresh 해야?

  3. 댓글 신고하기

  4. 답글 달기

  5. 댓글 좋아요/싫어요하기

  6. 수정된 경우, 수정됨 표시해야 함

*/
function CommentList({ list, writebox, user, myCommentView, showLoadMoreBtn }) {
  const props = {
    title: <span><Counter>{list ? list.length : 0}</Counter> 개의 댓글</span>,
    noContentMsg: <span><FaIcon icon='lg-comment-dots' /> 작성된 댓글이 없습니다.</span>,
    items: list ? list.map((comment, index) =>
      <React.Fragment key={index}>
        <CommentItem comment={comment} myCommentView={myCommentView} />
        <Divider />
      </React.Fragment>) : null
  };

  return (
    <FlatListTemplate
      titleType='title'
      subHeader={writebox ? <CommentWriteBox user={user} /> : null}
      paperWrap
      loadMoreBtn={showLoadMoreBtn ? <LoadMoreBtn btnStr='댓글 더 불러오기' /> : null}
      {...props}
    />
  );
}

export default CommentList;