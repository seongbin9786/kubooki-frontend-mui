import React from 'react';
import compose from 'recompose/compose';
import moment from 'moment';
import { withWidth, withStyles, Card, CardContent, Typography, Grid } from '@material-ui/core';

import FaIcon from './FaIcon';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 3,
    transition: 'transform 0.15s',

    '&:hover': {
      transform: 'translateY(-15px)',
      boxShadow:
        `0px 3px 5px -1px rgba(0, 0, 0, 0.2), 
         0px 5px 8px 0px rgba(0, 0, 0, 0.14), 
         0px 1px 14px 0px rgba(0, 0, 0, 0.12)`,
    },
  },
  marginPC: {
    height: 'auto !important',
    marginBottom: 80,
  },
  marginMobile: {
    height: 'auto !important',
    marginBottom: 50,
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
  content: '<p>Some kind of HTML here!</p>'
  startDate: '05.06.2018',
  endDate: '30.08.2018',
*/
function PopupManageItem({ classes, width, popup, handleClick }) {
  const classesRoot = classes['margin' + (width === 'xs' ? 'Mobile' : 'PC')];

  const { id, title, content, startDate, endDate } = popup;
  const isShowing = moment().isBetween(startDate, endDate, '[]');

  return (
    <Grid item xs={12} sm={6} lg={4} className={classesRoot}>
      <Card className={classes.card} onClick={handleClick(id)}>
        <CardContent>
          <Typography variant="headline" className={classes.title}>{title}</Typography>
          <div className={classes.details}>
            <FaIcon icon='sm-calendar-alt' className={classes.icon} /><span>{startDate + ' - ' + endDate}</span>
          </div>
          <div className={classes.details}>
            <FaIcon icon={isShowing ? 'sm-eye' : 'sm-eye-slash'} className={classes.icon} /><span>{isShowing ? '표시중' : '내려짐'}</span>
          </div>
        </CardContent>
      </Card>
    </Grid >
  );
}

export default compose(withStyles(styles), withWidth())(PopupManageItem);
