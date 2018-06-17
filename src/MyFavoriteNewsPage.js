import React from 'react';
import injectSheet from 'react-jss';
import { withWidth, Typography } from '@material-ui/core';

import { myFavoriteNewsList } from './store';
import MyFavoriteNewsItem from './MyFavoriteNewsItem';
import MyFavoriteNewsItemMobile from './MyFavoriteNewsItemMobile';
import LoadMoreBtn from './LoadMoreBtn';
import GridListTemplate from './GridListTemplate';

import { smallRoot } from './styles';
import theme from './ThemeConfig';

const styles = {
  smallRoot,
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * -1,
  },
};

const MyFavoriteNewsPage = (({ classes, width }) => {
  const recentList = myFavoriteNewsList.slice().reverse();
  const mobileScreen = width === 'xs' || width === 'sm';

  return (
    <div className={classes.smallRoot}>
      <Typography variant='display1'>내가 좋아한 기사</Typography>

      {mobileScreen ?
        recentList.map(({ date, list }, index) =>
          <GridListTemplate
            titleType='display1'
            items={list.map((item, index) => <MyFavoriteNewsItemMobile item={item} key={index} />)}
            subHeader={<Typography variant='subheading' className={classes.title}>{date}</Typography>}
            noMoreLoadBtn
            noBottomMargin
          />
        )
        :
        recentList.map(({ date, list }, index) =>
          <React.Fragment key={index}>
            <Typography variant='subheading' className={classes.title}>{date}</Typography>
            {list.map((item, index) => <MyFavoriteNewsItem item={item} key={index} />)}
          </React.Fragment>
        )
      }

      <LoadMoreBtn btnStr='내가 좋아한 기사 더 불러오기' />
    </div>
  );
});

export default injectSheet(styles)(withWidth()(MyFavoriteNewsPage));