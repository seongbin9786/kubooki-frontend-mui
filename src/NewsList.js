import React from 'react';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  },
  subheader: {
    width: '100%',
  },
  img: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
  },
  categoryContainer: {
    marginTop: 16,
    marginBottom: 16
  },
  categoryText: {
    color: '#b2b2b2',
    borderBottomColor: '#ECCA30',
    borderBottom: '2px solid black',
  },
  date: {
    marginTop: 11,
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 400,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  Paper: {
    margin: 3,
    padding: 10,
  },
  marginPC: {
    height: 'auto !important',
    marginBottom: 80,
  },
  marginMobile: {
    height: 'auto !important',
    marginBottom: 50,
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
  const { width, classes, location: { pathname } } = props;
  const index = TabList.findIndex(([, tabPath]) => tabPath === pathname);
  if (index === -1) return null;

  const [currentTab] = TabList[index];
  console.log('pathname:', pathname);
  console.log('currentTab:', currentTab);

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        spacing={16}
      >

        {newsList.map(news =>
          pathname === '/' || currentTab === news.category ?
            <Grid item key={news.id} xs={12} sm={6} lg={4} className={width === 'xs' ? classes.marginMobile : classes.marginPC}>
              <div className={classes.Paper}>
                <img src={news.img} alt="기사 이미지" className={classes.img} />
                <div className={classes.categoryContainer}>
                  <span className={classes.categoryText}>
                    {news.category}
                  </span>
                </div>
                <Typography variant="headline">
                  {news.title}
                </Typography>
                <Typography variant="caption" className={classes.date}>
                  {news.date}
                </Typography>
              </div>
            </Grid>
            : null
        )}

      </GridList>

      <Button variant="raised" color="primary" className={classes.moreButton}>
        기사 더 불러오기
      </Button>
    </div>
  );
}

export default compose(withStyles(styles), withWidth())(withRouter(NewsGridList));