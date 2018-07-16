import React from 'react';
import injectSheet from 'react-jss';
import { withWidth, Typography } from '@material-ui/core';

import { myFavoriteNewsList } from '../modules/store';
import MyFavoriteNewsItem from '../components/MyFavoriteNewsItem';
import MyFavoriteNewsItemMobile from '../components/MyFavoriteNewsItemMobile';
import LoadMoreBtn from '../components/buttons/LoadMoreBtn';
import GridListTemplate from '../utils/GridListTemplate';
import { smallRootWithPadding } from '../styles/styles';
import theme from '../configs/ThemeConfig';

const styles = {
  smallRootWithPadding,
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * -1,
  },
};

const MyFavoriteNewsPage = (({ classes, width }) => {
  const recentList = myFavoriteNewsList.slice().reverse();
  const mobileScreen = width === 'xs' || width === 'sm';

  return (
    <div className={classes.smallRootWithPadding}>
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