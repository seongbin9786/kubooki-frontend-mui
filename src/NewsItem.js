import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import theme from './ThemeConfig';
import { borderBottomHighlight, marginVertical, marginBottomRoot } from './styles';

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
  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.marginBottomRoot}>
      <div className={classes.Paper}>
        <Link to={`/news/${news.id}`}>
          <img src={news.img} alt="기사 이미지" className={classes.img} />
        </Link>
        <div className={classes.categoryContainer}>
          <span className={classes.categoryText}>
            {news.category}
          </span>
        </div>
        <Link to={`/news/${news.id}`} className={classes.titleLink}>
          <Typography variant="headline">
            {news.title}
          </Typography>
        </Link>
        <Typography variant="caption" className={classes.date}>
          {news.date}
        </Typography>
      </div>
    </Grid>
  );
}

export default withStyles(styles)(withRouter(NewsItem));