import React from 'react';
import {
  withStyles,
  Typography,
} from '@material-ui/core';

import { myFavoriteNewsList } from './store';
import MyFavoriteNewsItem from './MyFavoriteNewsItem';
import LoadMoreBtn from './LoadMoreBtn';

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: 20,
    maxWidth: 900,
    minWidth: 350,
    padding: '20px',
  },
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * -1,
  },
});

export default withStyles(styles)(({ classes }) => {
  const recentList = myFavoriteNewsList.slice().reverse();

  return (
    <div className={classes.root}>
      <Typography variant='display1'>내가 좋아한 기사</Typography>

      {recentList.map(({ date, list }, index) =>
        <React.Fragment key={index}>
          <Typography variant='subheading' className={classes.title}>{date}</Typography>
          {list.map((item, index) => <MyFavoriteNewsItem item={item} key={index} />)}
        </React.Fragment>
      )}

      <LoadMoreBtn btnStr='내가 좋아한 기사 더 불러오기' />
    </div>
  );
});