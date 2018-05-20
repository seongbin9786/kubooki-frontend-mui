import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
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
  imgContainer: {
    position: 'relative',
    width: '100%',
  },
  imgTemp: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    height: 'auto'
  },
  darkOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    background: 'black',
    opacity: '.3',
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
  content: {
    color: 'white'
  },
  dateTitle: {
    ...this.date,
    marginTop: 11,
    fontSize: '1rem',
    color: 'white'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  readMoreBtn: {
    position: 'absolute',
    bottom: '50px',
    left: '50px',

    display: 'block',
    border: '1px white solid',
    padding: '8px 30px',

    color: 'white',
    textDecoration: 'none',
    transition: 'background .2s ease-out',
  },
  readMoreBtnHover: {
    position: 'absolute',
    bottom: '50px',
    left: '50px',

    display: 'block',
    border: '1px white solid',
    padding: '8px 30px',

    textDecoration: 'none',
    transition: 'background .2s ease-out',
    color: 'black',
    backgroundColor: 'white',
  }
});

class NewsItem extends Component {
  state = {
    hover: false,
  }

  handleHover = () => this.setState(({ hover }) => ({ hover: !hover }));

  render() {
    const { news, classes, width, headline } = this.props;
    const { hover } = this.state;

    const tempImg = 'https://www.creativeboom.com/uploads/articles/2b/2be47fa48493c19a47bb27edee9d03e4c0335b04_630.jpg';
    const tempId = 1;

    /* Headline 컴포넌트는 작동 안 됨 */
    return headline ?
      <Grid item xs={12} lg={7} className={width === 'xs' ? classes.marginMobile : classes.marginPC}>
        <div className={classes.Paper}>
          <div className={classes.imgContainer}>
            <Link to={`/news/${tempId}`}>
              <img className={classes.imgTemp} src={tempImg} alt='배경이미지' />
              <span
                className={classes.darkOverlay}
                onMouseOver={this.handleHover}
                onMouseLeave={this.handleHover}>
              </span>
            </Link>
            <div className={classes.info}>
              <Typography variant="display3" className={classes.title}>
                <Link to='/' className={classes.link}>North Korea's secretive capital</Link>
              </Typography>
              <Typography variant="headline" className={classes.content}>
                Raphael Olivier's photographs unveil the unique architecture of Pyongyang.
              </Typography>
              <Typography variant="caption" className={classes.dateTitle}>
                20.05.2018
              </Typography>
            </div>
            <Link className={hover ? classes.readMoreBtnHover : classes.readMoreBtn} to={`/news/${tempId}`}>Read More</Link>
          </div>
        </div>
      </Grid>
      :
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
      </Grid>;
  }
}

export default compose(withStyles(styles), withWidth())(withRouter(NewsItem));