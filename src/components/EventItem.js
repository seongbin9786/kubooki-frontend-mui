import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { withWidth, Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

import FaIcon from './FaIcon';
import { marginBottomRoot } from './styles';
import theme from './configs/ThemeConfig';

const styles = {
  root: {
    margin: theme.spacing.unit * 1,
    transition: 'transform 0.15s',

    '&:hover': {
      transform: 'translateY(-15px)',
      boxShadow:
        `0px 3px 5px -1px rgba(0, 0, 0, 0.2), 
         0px 5px 8px 0px rgba(0, 0, 0, 0.14), 
         0px 1px 14px 0px rgba(0, 0, 0, 0.12)`,
    },
  },
  marginBottomRoot,
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
};

/*
  id: '1',
  title: '에버랜드 썸머 스플래쉬 제휴',
  thumbnail: 'http://cfile25.uf.tistory.com/image/24553738575E014D18A049',
  startDate: '05.06.2018',
  endDate: '30.08.2018',
  prize: '학생증 제시 30% 할인',
  resultDate: '-',
*/
function EventItem({ classes, event, handleClick, width }) {
  const { id, title, thumbnail, startDate, endDate, prize, resultDate } = event;

  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.marginBottomRoot}>
      <Card className={classes.root} style={width !== 'xs' ? { margin: theme.spacing.unit * 3 } : null} onClick={handleClick(id)}>
        <CardMedia
          className={classes.image}
          image={thumbnail}
          title={title}
        />
        <CardContent>
          <Typography variant="headline" className={classes.title}>{title}</Typography>

          <div className={classes.details}>
            <FaIcon icon='sm-calendar-alt' className={classes.icon} /><span>{startDate + ' - ' + endDate}</span>
          </div>

          <div className={classes.details}>
            <FaIcon icon='sm-gift' className={classes.icon} /><span>{prize}</span>
          </div>

          {resultDate && resultDate !== '-'
            ? <div className={classes.details}>
              <FaIcon icon='sm-bullhorn' className={classes.icon} /><span>{resultDate + ' 발표'}</span>
            </div>
            : null
          }
        </CardContent>
      </Card>
    </Grid >
  );
}

export default compose(withWidth(), injectSheet(styles))(EventItem);
