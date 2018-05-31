import React from 'react';
import { Divider, withStyles } from '@material-ui/core';

import FlatListTemplate from './FlatListTemplate';
import CommentItem from './CommentItem';
import CommentWriteBox from './CommentWriteBox';

const styles = theme => ({
  counter: {
    color: theme.palette.primary.main
  }
});

function CommentList({ classes, list, writebox, user, myCommentView }) {
  const titleMsg = <span><b className={classes.counter}>{list.length}</b> 개의 댓글</span>;
  const noContentMsg = <span><i className="fas fa-lg fa-comment-dots"></i> 작성된 댓글이 없습니다.</span>;
  const items = list.map((comment, index) =>
    <React.Fragment key={index}>
      <CommentItem comment={comment} myCommentView={myCommentView} />
      <Divider />
    </React.Fragment>
  );

  return (
    <FlatListTemplate
      title={titleMsg}
      titleType='title'
      subHeader={writebox ? <CommentWriteBox user={user} /> : null}
      items={items}
      noContentMsg={noContentMsg}
      paperWrap
    />
  );
}

export default withStyles(styles)(CommentList);