import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  imgRoot: {
    position: 'relative',
    width: '100%',
    height: 400,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
  contentRoot: {
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
    const { classes } = this.props;
    const { hover } = this.state;
    // 예시 데이터
    // 헤드라인에는 desc 속성도 표시함
    const event = {
      id: '1',
      thumbnail: 'https://ja-events-ii.demo.joomlart.com/images/joomlart/slideshow/sl-1.jpg',
      title: 'TED x Kyonggi University',
      desc: '6월 30일, 경기대학교 최호준홀에서 TEDx가 열립니다.',
      startDate: '20.05.2018',
      endDate: '21.05.2018',
      prize: '기념품 지급',
      resultDate: '22.05.2018',
    };
    const { id, title, desc, thumbnail, startDate, endDate, prize, resultDate } = event;
    const url = `/events/${id}`;

    return (
      <Grid item xs={12}>
        <div className={classes.imgRoot}>
          <Link to={url}>
            <img className={classes.img} src={thumbnail} alt='배경이미지' />
            <span
              className={classes.darkOverlay}
              onMouseOver={this.handleHover}
              onMouseLeave={this.handleHover}>
            </span>
          </Link>
          <div className={classes.contentRoot}>
            <Typography variant="display3" className={classes.title}>
              <Link to={url} className={classes.link}>{title}</Link>
            </Typography>
            <Typography variant="headline" className={classes.content}>
              {desc}
            </Typography>
            <Typography variant="caption" className={classes.dateTitle}>
              {startDate === endDate ? startDate : startDate + ' - ' + endDate}
            </Typography>
            {prize && prize !== '-'
              ? <Typography variant="caption" className={classes.dateTitle}>{'보상: ' + prize}</Typography>
              : null
            }
            {resultDate && resultDate !== '-'
              ? <Typography variant="caption" className={classes.dateTitle}>{'발표일: ' + resultDate}</Typography>
              : null
            }
          </div>
          <Link className={hover ? classes.readMoreBtnHover : classes.readMoreBtn} to={url}>내용 확인하기</Link>
        </div>
      </Grid>
    );
  }
}

export default compose(withStyles(styles), withWidth())(withRouter(NewsItem));