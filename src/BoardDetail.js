import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { withWidth, Typography } from '@material-ui/core';
import CommentList from './CommentList';
import Spacing from './Spacing';
import { commentList, userDemo } from './store';

import './content.css';
import { smallRoot } from './styles';
import theme from './ThemeConfig';

const styles = {
  smallRoot,
  title: ({ width }) => ({
    marginTop: width === 'xs' ? 20 : 60,
    letterSpacing: -1.5,
    color: '#535353',
  }),
  date: {
    color: '#535353',
    fontWeight: 300,
  },
  writerBox: {
    marginTop: 30,
    paddingLeft: 20,
    borderLeft: '1px solid',
    borderColor: theme.palette.primary.main,
  },
  writerPic: {
    display: 'block',
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
  writerBy: {
    fontSize: 18,
    color: '#535353'
  },
  writerName: {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
  counter: {
    marginTop: 10,
    color: '#535353',
    fontWeight: 300,
  },
};

/*
  id: 1,
  title: '',
  content: '', // html
  creationDate: '31.05.2012',
  lastUpdateDate: '31.05.2012',
  views: 1,
  likes: 1,
*/
function BoardDetail({ classes, item, useComment, useLike, footer, width }) {
  const { title, writer, content, creationDate, lastUpdateDate, views, likes } = item;
  const writerPic = 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg';

  return (
    <div className={classes.smallRoot}>
      <Typography variant={width === 'xs' ? 'display1' : 'display3'} className={classes.title}>{title}</Typography>
      <div className={classes.writerBox}>
        <img className={classes.writerPic} alt={writer} src={writerPic} />
        <span className={classes.writerBy}> by </span>
        <span className={classes.writerName}>{writer}</span>
        <Typography className={classes.date}>{'등록: ' + creationDate}</Typography>
        <Typography className={classes.date}>{'최종 수정: ' + lastUpdateDate}</Typography>
        <Typography className={classes.counter}>{'조회수: ' + views}</Typography>
      </div>

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

export default compose(withWidth(), injectSheet(styles))(BoardDetail);