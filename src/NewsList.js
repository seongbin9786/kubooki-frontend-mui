import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { withRouter } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';

import NewsItem from './NewsItem';
import { TabList } from './TabConfig';

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

function NewsGridList({ classes, location: { pathname }, index, newsList }) {
  // 1. index를 pathname의 값으로 결정한다. 
  // 2. 뉴스 상세 페이지 등에서는 index를 category에 판단하여 props로 제공한다.
  // 3. [2]의 경우에는 제공된 index에 맞는 기사 목록을 보인다.
  // 4. 올바른 탭 URL이 아닌 경우 렌더링하지 않는다. (index 값이 -1인 경우)
  index = index || TabList.findIndex(([, tabPath]) => tabPath === pathname);
  if (index === -1) return null;

  const [currentTab] = TabList[index];

  console.log('NewsList is indeed rendered now!');

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        spacing={16}
      >
        {index === 0 ? <NewsItem headline /> : null}
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