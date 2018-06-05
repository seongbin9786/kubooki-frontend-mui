import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import './content.css';
import CommentList from './CommentList';
import Spacing from './Spacing';
import { commentList, userDemo } from './store';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '1100px',
  },
  title: {
    marginTop: 60,
    letterSspacing: -1.5,
    color: '#535353',
  },
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
});

/*
  id: 1,
  title: '',
  content: '', // html
  creationDate: '31.05.2012',
  lastUpdateDate: '31.05.2012',
  views: 1,
  likes: 1,
*/
function BoardDetail({ classes, item, useComment, useLike }) {
  const { title, writer, content, creationDate, lastUpdateDate, views, likes } = item;
  const writerPic = 'https://cdn.cnn.com/cnnnext/dam/assets/170706100453-sophie-tatum-small-11.jpg';

  return (
    <div className={classes.root}>
      <Typography variant='display3' className={classes.title}>{title}</Typography>
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

export default withStyles(styles)(BoardDetail);