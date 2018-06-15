import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
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
  titleLink: {
    textDecoration: 'none',
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

function NewsItem({ news, classes, width }) {
  return (
    <Grid item xs={12} sm={6} lg={4} className={width === 'xs' ? classes.marginMobile : classes.marginPC}>
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

export default compose(withStyles(styles), withWidth())(withRouter(NewsItem));