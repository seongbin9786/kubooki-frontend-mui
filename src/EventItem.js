import React from 'react';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FaIcon from './FaIcon';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 3,
  },
  marginPC: {
    height: 'auto !important',
    marginBottom: 80,
  },
  marginMobile: {
    height: 'auto !important',
    marginBottom: 50,
  },
  image: {
    height: '100%',
    // paddingTop: '56.25%', // 16:9,,, 이미지 사이즈임
    paddingTop: '70%',
  },
  title: {
    marginBottom: 10,
  },
  details: {
    color: '#777777',
    marginBottom: 5,
  },
  icon: {
    width: 16,
    marginRight: 10,
  },
});

/*
  id: '1',
  title: '에버랜드 썸머 스플래쉬 제휴',
  thumbnail: 'http://cfile25.uf.tistory.com/image/24553738575E014D18A049',
  startDate: '05.06.2018',
  endDate: '30.08.2018',
  prize: '학생증 제시 30% 할인',
  resultDate: '-',
*/
function EventItem({ classes, width, event }) {
  const { id, title, thumbnail, startDate, endDate, prize, resultDate } = event;

  return (
    <Grid item xs={12} sm={6} lg={4} className={width === 'xs' ? classes.marginMobile : classes.marginPC}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          image={thumbnail}
          title={title}
        />
        <CardContent>
          <Typography variant="headline" className={classes.title}>{title}</Typography>

          <div className={classes.details}>
            <FaIcon sm type='calendar-alt' className={classes.icon} /><span>{startDate + ' - ' + endDate}</span>
          </div>

          <div className={classes.details}>
            <FaIcon sm type='gift' className={classes.icon} /><span>{prize}</span>
          </div>

          {resultDate && resultDate !== '-'
            ? <div className={classes.details}>
              <FaIcon sm type='bullhorn' className={classes.icon} /><span>{resultDate + ' 발표'}</span>
            </div>
            : null
          }
        </CardContent>
      </Card>
    </Grid >
  );
}

export default compose(withStyles(styles), withWidth())(EventItem);
