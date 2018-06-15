import React from 'react';
import injectSheet from 'react-jss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { withWidth } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    minHeight: 200,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  header: {
    maxWidth: '60%',
  },
  writer: { // NewsFeedbackItem과 동일
    color: grey[500],
  },
  dateContainer: {
    left: theme.spacing.unit * 2,
    bottom: theme.spacing.unit * 2,
  },
  category: {
    fontSize: 16,
    color: '#b2b2b2',
    borderBottomColor: '#ECCA30',
    borderBottom: '2px solid black',
  },
  date: {
    display: 'inline-block',
    color: grey[600],
    width: 140,
  },
  dateNext: {
    composes: '$date',
    marginLeft: theme.spacing.unit * 1,
  },
  thumbnail: {
    position: 'absolute',
    right: 0,
    top: 0,

    maxWidth: '40%',
    width: 'auto',
    height: '100%',
  },
});

const MyFavoriteNewsItem = (({
  classes,
  width,
  item: {
    id,
    title,
    writers,
    category,
    creationDate,
    lastUpdateDate,
    thumbnailUrl
  }
}) => (
  <div>
    <Paper className={classes.root} elevation={4}>
      <div className={classes.header}>
        <Typography variant="headline">{title}</Typography>
        <span className={classes.category}>{category}</span>
      </div>

      <div className={classes.dateContainer}>
        <Typography variant="subheading" className={classes.writer}>{'작성자: ' + writers.toString()}</Typography>
        <div>
          <Typography variant='subheading' className={classes.date}>
            {creationDate + ' 작성됨'}
          </Typography>

          {lastUpdateDate ?
            <Typography variant='subheading' className={classes.dateNext}>
              {lastUpdateDate + ' 수정됨'}
            </Typography>
            : null
          }
        </div>
      </div>
      <img src={thumbnailUrl} alt={`${title} 섬네일`} className={classes.thumbnail} />
    </Paper>
  </div>
));

export default injectSheet(styles)(withWidth()(MyFavoriteNewsItem));