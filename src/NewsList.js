import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { withRouter } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';

import NewsItem from './NewsItem';
import { TabList } from './TabConfig';
import { newsList } from './store';

const styles = theme => ({
  root: {
    maxWidth: 1280,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 80,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  subheader: {
    width: '100%',
  },
  moreButton: {
    width: '100%',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 30,
    height: 48,
    fontSize: 24,
    borderRadius: 12
  }
});

function NewsGridList(props) {
  const { classes, location: { pathname } } = props;
  const index = TabList.findIndex(([, tabPath]) => tabPath === pathname);
  if (index === -1) return null;

  const [currentTab] = TabList[index];

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        spacing={16}
      >
        <NewsItem headline />
        {newsList.map(news => pathname === '/' || currentTab === news.category ? <NewsItem news={news} key={news.id} /> : null)}
      </GridList >

      <Button
        variant="raised"
        color="primary"
        className={classes.moreButton}
      >
        기사 더 불러오기
      </Button>
    </div >
  );
}

export default compose(withStyles(styles), withWidth())(withRouter(NewsGridList));