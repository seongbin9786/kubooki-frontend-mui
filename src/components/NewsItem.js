import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ROOT_URL } from '../configs/ServerConfig';
import NewsConstants from '../constants/NewsConstants';
import theme from '../configs/ThemeConfig';
import { borderBottomHighlight, marginVertical, marginBottomRoot } from '../styles/styles';

const styles = {
  Paper: {
    margin: 3,
    padding: 10,
  },
  marginBottomRoot,
  img: {
    width: '100%',
    height: 'auto',
  },
  categoryContainer: marginVertical(16),
  categoryText: {
    color: theme.palette.third.main,
    ...borderBottomHighlight,
  },
  date: {
    marginTop: 11,
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 400,
  },
  titleLink: {
    textDecoration: 'none',
  },
  info: {
    position: 'absolute',
    left: '50px',
    top: '50px',
    right: '50px',
  },
  title: {
    fontWeight: 'normal',
    marginBottom: '24px',
  },
};

function NewsItem({ news, classes }) {

  const { id, newsCategory, thumbnailPicId, title } = news;

  const thumbnailPicUrl = thumbnailPicId === 0 ? '/no-image.png' : `${ROOT_URL}/img/${thumbnailPicId}`;
  const detailUrl = `/news/${id}`;
  const category = NewsConstants.getCategoryNameByValue(newsCategory);
  const date = '2018-09-30';

  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.marginBottomRoot}>
      <div className={classes.Paper}>
        <Link to={detailUrl}>
          <img src={thumbnailPicUrl} alt="기사 이미지" className={classes.img} />
        </Link>
        <div className={classes.categoryContainer}>
          <span className={classes.categoryText}>
            {category}
          </span>
        </div>
        <Link to={detailUrl} className={classes.titleLink}>
          <Typography variant="headline">
            {title}
          </Typography>
        </Link>
        <Typography variant="caption" className={classes.date}>
          {date}
        </Typography>
      </div>
    </Grid>
  );
}

export default withStyles(styles)(withRouter(NewsItem));