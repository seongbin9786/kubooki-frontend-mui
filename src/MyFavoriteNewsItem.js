import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',

    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,

  },
  writer: { // NewsFeedbackItem과 동일
    color: grey[500],
  },
  dateContainer: {
    position: 'absolute',
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
    display: 'inline-block',
    color: grey[600],
    width: 140,
    marginLeft: theme.spacing.unit * 1,
  },
  thumbnail: {
    width: '30%',
    height: '100%',
    margin: theme.spacing.unit * -2,
    marginLeft: theme.spacing.unit,
  },
});

/*
  id: 4,
  title: '2018학년도 잔디공원 돌 줍기 행사',
  writer: '김성빈',
  category: '경기 소식',
  creationDate: '31.05.2018',
  lastUpdateDate: null,
  thumbnailUrl: 'http://www.kubooki.com/xe/files/thumbnails/151/262/320x240.crop.jpg',
*/
export default withStyles(styles)(({
  classes,
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
      <div>
        <Typography variant="headline">{title}</Typography>
        <span className={classes.category}>{category}</span>

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

      </div>
      <img src={thumbnailUrl} alt={`${title} 섬네일`} className={classes.thumbnail} />
    </Paper>
  </div>
));
