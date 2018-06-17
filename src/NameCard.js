import React from 'react';
import injectSheet from 'react-jss';
import { withWidth, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const styles = {
  card: ({ size, center, width }) => console.log(width) || ({
    display: 'flex',
    justifyContent: 'space-between',
    height: '150px',
    marginBottom: '40px',
    width: width === 'xs' ? '100%' : (size ? size + 'px' : '1000px'),
    margin: center ? '0 auto' : null,
  }),
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cover: ({ width }) => ({
    width: '150px',
    height: '150px',
  }),
};

function NameCard({ classes, writer }) {
  return (
    <Card className={classes.card}>
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

export default withWidth()(injectSheet(styles)(NameCard));