import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NewsItem from './NewsItem';
import { fullImage, darkOverlay, marginBottomRoot } from './styles';

const styles = {
  Paper: {
    margin: 3,
    padding: 10,
  },
  marginBottomRoot,
  imgContainer: {
    position: 'relative',
    width: '100%',
  },
  fullImage,
  darkOverlay,
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
    composes: '$readMoreBtn',
    color: 'black',
    backgroundColor: 'white',
  }
};

class NewsHeadlineItem extends Component {
  state = {
    hover: false,
  }

  // 제목에 hover 시에도 버튼이 활성화되어야 함
  handleHover = () => this.setState(({ hover }) => ({ hover: !hover }));

  render() {
    const { classes, width } = this.props;
    const { hover } = this.state;

    // 예시 데이터
    const news = {
      id: '1',
      category: '경기소식',
      img: 'https://www.creativeboom.com/uploads/articles/2b/2be47fa48493c19a47bb27edee9d03e4c0335b04_630.jpg',
      title: 'North Korea\'s secretive capital',
      content: 'Raphael Olivier\'s photographs unveil the unique architecture of Pyongyang.', // Headline의 경우 content가 필요
      date: '20.05.2018'
    };

    if (width === 'xs')
      return <NewsItem news={news} />;

    return (
      <Grid item xs={12} lg={7} className={classes.marginBottomRoot}>
        <div className={classes.Paper}>
          <div className={classes.imgContainer}>
            <Link to={`/news/${news.id}`}>
              <img className={classes.fullImage} src={news.img} alt='배경이미지' />
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

export default compose(withStyles(styles), withWidth())(withRouter(NewsHeadlineItem));