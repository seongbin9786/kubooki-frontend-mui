import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
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
  img: {
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
    const { classes, width } = this.props;
    const { hover } = this.state;

    // 예시 데이터
    const news = {
      id: '1',
      img: 'https://www.creativeboom.com/uploads/articles/2b/2be47fa48493c19a47bb27edee9d03e4c0335b04_630.jpg',
      title: 'North Korea\'s secretive capital',
      content: 'Raphael Olivier\'s photographs unveil the unique architecture of Pyongyang.',
      date: '20.05.2018'
    };

    return (
      <Grid item xs={12} lg={7} className={width === 'xs' ? classes.marginMobile : classes.marginPC}>
        <div className={classes.Paper}>
          <div className={classes.imgContainer}>
            <Link to={`/news/${news.id}`}>
              <img className={classes.img} src={news.img} alt='배경이미지' />
              <span
                className={classes.darkOverlay}
                onMouseOver={this.handleHover}
                onMouseLeave={this.handleHover}>
              </span>
            </Link>
            <div className={classes.info}>
              <Typography variant="display3" className={classes.title}>
                <Link to={`/news/${news.id}`} className={classes.link}>{news.title}</Link>
              </Typography>
              <Typography variant="headline" className={classes.content}>
                {news.content}
              </Typography>
              <Typography variant="caption" className={classes.dateTitle}>
                {news.date}
              </Typography>
            </div>
            <Link className={hover ? classes.readMoreBtnHover : classes.readMoreBtn} to={`/news/${news.id}`}>Read More</Link>
          </div>
        </div>
      </Grid>
    );
  }
}

export default compose(withStyles(styles), withWidth())(withRouter(NewsItem));