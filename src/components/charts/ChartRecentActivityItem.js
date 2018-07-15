import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function ChartRecentActivityItem({ classes, item }) {
  const { user, activity } = item;
  const { profile, name } = user;
  const { detail, date } = activity;

  const message = name === 'system' ? detail : `${name}님이 ${detail}하였습니다.`;

  return (
    <div className={classes.root}>
      <ListItem dense button>
        <Avatar alt={name} src={profile} />
        <ListItemText primary={message} secondary={date} />
      </ListItem>
    </div>
  );
}

export default withStyles(styles)(ChartRecentActivityItem);