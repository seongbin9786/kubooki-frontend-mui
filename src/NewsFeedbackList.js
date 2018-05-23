import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

import NewsFeedbackItem from './NewsFeedbackItem';
import { feedbackList } from './store';
import SortBar from './SortBar';

const styles = theme => ({
  root: {
    maxWidth: '1100px',
    margin: '0 auto',
    marginTop: '40px',
  },
  listContainer: {
    marginTop: 20,
    marginBottom: 80,
    width: '100%',
  },
  nothingInProgress: {
    textAlign: 'center',
    padding: '30px',
    color: theme.palette.primary.light,
  },
});

function FeedbackList({ classes }) {
  return (
    <div className={classes.root}>
      <Typography
        variant='display1'
      >
        피드백 중인 기사
      </Typography>
      <SortBar tabName='오래된 요청 순' />
      <div
        className={classes.listContainer}
        elevation={1}
      >
        {feedbackList ? feedbackList.map((item, index) =>
          <NewsFeedbackItem item={item} key={index} />
        ) :
          <Typography
            variant='headline'
            className={classes.nothingInProgress}
          >
            <i className="fas fa-lg fa-check-circle"></i> 피드백 과정 중인 기사가 없습니다.
          </Typography>
        }
      </div>
    </div>
  );
};

export default withStyles(styles)(FeedbackList);