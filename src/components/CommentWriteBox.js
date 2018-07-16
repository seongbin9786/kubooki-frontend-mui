import React from 'react';
import styled from 'styled-components';
import { withWidth, Typography, Button, Paper } from '@material-ui/core';

import { InputTextArea } from '../styles/CommonStyledComponent';
import FaIcon from './FaIcon';
import theme from '../configs/ThemeConfig';

const RootPaper = styled(Paper)`
  min-height: 110px;
  margin-top: 40px;
  display: ${({ width }) => width === 'xs' ? null : 'flex'};
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: ${theme.spacing.unit * 2 + 'px'};
  padding-bottom: ${({ width }) => (theme.spacing.unit * (width === 'xs' ? -1 : 0)) + 'px'};
  margin-bottom: ${({ width }) => (width === 'xs' ? theme.spacing.unit : 0) + 'px'};
`;

const CommentInput = styled(InputTextArea)`
  margin-top: ${theme.spacing.unit + 'px'};
  padding: ${theme.spacing.unit * 2 + 'px'};
`;

const SubmitBtn = styled(Button)`
  font-size: 1rem;
  padding: ${theme.spacing.unit * 2 + 'px'};
  margin: ${({ width }) => (width === 'xs' ? 0 : theme.spacing.unit) + 'px'};

  ${({ width }) => width === 'xs' && `
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    width: 100%;
  `}
`;

/*
  TODO 1: submitBtn의 onClick 구현하기
  TODO 2: 비 로그인 시 
*/

const loggedInStr = '주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 제재를 받을 수 있습니다';
const nonUserStr = '로그인하고 댓글을 입력해보세요';

function CommentWriteBox({ user, width }) {
  return (
    <RootPaper elevation={1}>
      <Container>
        <Typography variant='title'>{user.name}</Typography>
        <CommentInput placeholder={user ? loggedInStr : nonUserStr} />
      </Container>
      <SubmitBtn color="primary" variant="raised">
        <FaIcon icon='lg-comments' />
      </SubmitBtn>
    </RootPaper>
  );
}

export default withWidth()(CommentWriteBox);