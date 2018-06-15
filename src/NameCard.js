import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '150px',
    marginBottom: '40px',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cover: {
    width: '150px',
    height: '150px',
  },
});

function MediaControlCard({ classes, theme, writer, size }) {

  return (
    <Card className={classes.card} style={size ? { width: size + 'px' } : { width: '1000px' }}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div>
            <Typography variant="headline">{writer.name}</Typography>
            <Typography variant="subheading" color="textSecondary">{writer.position}</Typography>
          </div>
          <div>
            <Typography variant="subheading" color="textSecondary">
              기자가 작성한 기사 더 보기
            </Typography>
          </div>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={writer.profileImg}
      />
    </Card>
  );
}

export default withStyles(styles)(MediaControlCard);