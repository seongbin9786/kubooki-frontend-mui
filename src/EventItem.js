import React from 'react';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
});

function EventItem({ classes, width, event }) {
  return (
    <Grid item xs={12} sm={6} lg={4} className={width === 'xs' ? classes.marginMobile : classes.marginPC}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={event.thumbnail}
          title={event.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline">
            {event.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary">
            공유하기
          </Button>
          <Button size="small" color="primary">
            내용 확인하기
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default compose(withStyles(styles), withWidth())(EventItem);
