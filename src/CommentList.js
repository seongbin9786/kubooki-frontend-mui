import React from 'react';
import { Divider, withStyles } from '@material-ui/core';

import FlatListTemplate from './FlatListTemplate';
import CommentItem from './CommentItem';
import CommentWriteBox from './CommentWriteBox';
import LoadMoreBtn from './LoadMoreBtn';
import FaIcon from './FaIcon';

const styles = theme => ({
  counter: {
    color: theme.palette.primary.main
  }
});

function CommentList({ classes, list, writebox, user, myCommentView, showLoadMoreBtn }) {
  const titleMsg = <span><b className={classes.counter}>{list ? list.length : 0}</b> 개의 댓글</span>;
  const noContentMsg = <span><FaIcon icon='lg-comment-dots' /> 작성된 댓글이 없습니다.</span>;
  const items = list ? list.map((comment, index) =>
    <React.Fragment key={index}>
      <CommentItem comment={comment} myCommentView={myCommentView} />
      <Divider />
    </React.Fragment>) : null;

  return (
    <FlatListTemplate
      title={titleMsg}
      titleType='title'
      subHeader={writebox ? <CommentWriteBox user={user} /> : null}
      items={items}
      noContentMsg={noContentMsg}
      paperWrap
      loadMoreBtn={showLoadMoreBtn ? <LoadMoreBtn btnStr='댓글 더 불러오기' /> : null}
    />
  );
}

export default withStyles(styles)(CommentList);