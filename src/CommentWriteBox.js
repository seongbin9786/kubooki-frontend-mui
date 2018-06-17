import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { withWidth, Typography, Button, Paper } from '@material-ui/core';

import { input } from './stylesComment';
import FaIcon from './FaIcon';
import theme from './ThemeConfig';

const styles = {
  root: ({ width }) => ({
    minHeight: '110px',
    marginTop: '40px',
    display: width === 'xs' ? null : 'flex',
    width: '100%',
  }),
  input: {
    ...input,
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
  submitBtn: ({ width }) => {
    const mobile = width === 'xs';
    const css = {
      fontSize: '1rem',
      padding: theme.spacing.unit * 2,
      margin: mobile ? 0 : theme.spacing.unit,
    };
    if (mobile) {
      css.borderTopLeftRadius = '0';
      css.borderTopRightRadius = '0';
      css.width = '100%';
    }
    return css;
  },
  container: ({ width }) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * (width === 'xs' ? -1 : 0),
    marginBottom: width === 'xs' ? theme.spacing.unit : 0,
  }),
};

/*
  TODO 1: submitBtn의 onClick 구현하기
  TODO 2: 비 로그인 시 
*/
function CommentList({ classes, user, width }) {
  return (
    <Paper
      elevation={1}
      className={classes.root}
    >
      <div className={classes.container}>
        <Typography
          variant='title'
        >
          {user.name}
        </Typography>
        <textarea
          className={classes.input}
          placeholder={user ? '주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 제재를 받을 수 있습니다' : '로그인하고 댓글을 입력해보세요'}
        />
      </div>

      <Button
        color="primary"
        variant="raised"
        className={classes.submitBtn}
      >
        <FaIcon icon='lg-comments' />
      </Button>
    </Paper>
  );
}

export default compose(withWidth(), injectSheet(styles))(CommentList);