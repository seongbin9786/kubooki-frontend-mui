import React from 'react';
import injectSheet from 'react-jss';
import { withWidth, Typography, Grid, Card, CardContent, CardMedia, Paper } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit,
  },
  marginPC: {
    height: 'auto !important',
    marginBottom: 72,
  },
  marginMobile: {
    height: 'auto !important',
    marginBottom: 16,
  },
  image: {
    height: '100%',
    // paddingTop: '56.25%', // 16:9,,, 이미지 사이즈임
    paddingTop: '70%',
  },
  writer: { // NewsFeedbackItem과 동일
    color: grey[500],
    marginBottom: 8,
  },
  date: {
    display: 'inline-block',
    color: grey[600],
    width: 140,
  },
  dateNext: {
    composes: '$date',
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
  <Grid item xs={12} sm={6} lg={4} className={width === 'xs' ? classes.marginMobile : classes.marginPC}>
    <Card className={classes.card} elevation={2}>
      <CardMedia
        className={classes.image}
        image={thumbnailUrl}
        title={title}
      />
      <CardContent>
        <Typography variant="headline" className={classes.title}>{title}</Typography>
        <Typography variant="subheading" className={classes.writer}>{'작성자: ' + writers.toString()}</Typography>
        <Typography variant='subheading' className={classes.date}>
          {creationDate + ' 작성됨'}
        </Typography>

        {lastUpdateDate ?
          <Typography variant='subheading' className={classes.dateNext}>
            {lastUpdateDate + ' 수정됨'}
          </Typography>
          : null
        }
      </CardContent>
    </Card>
  </Grid >
));

export default injectSheet(styles)(withWidth()(MyFavoriteNewsItem));