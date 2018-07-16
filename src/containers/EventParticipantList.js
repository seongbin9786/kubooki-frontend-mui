import React from 'react';
import { withStyles, Typography, ListItem, List, Avatar, Divider } from '@material-ui/core';
import AddIconBtn from '../components/buttons/AddIconBtn';
import DeleteIconBtn from '../components/buttons/DeleteIconBtn';

const styles = {
  title: {
    marginBottom: 4,
  },
  listContainer: {
    border: '1px solid lightgray',
    borderRadius: 5,
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: 8,
  },
  awardBtn: {
    margin: 8,
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  eventParticipantAddBtn: {
    marginBottom: 4,
  }
};

function EventParticipantList({ classes, participants }) {
  return (
    <React.Fragment>
      <div className={classes.spaceBetween}>
        <Typography variant='title' className={classes.title}>이벤트 참여자 목록</Typography>
        <AddIconBtn sm className={classes.eventParticipantAddBtn} />
      </div>
      <List className={classes.listContainer}>
        {participants.map(({ name, answerDate }, index) =>
          <React.Fragment key={index}>
            <ListItem button className={classes.listItem}>
              <div className={classes.userContainer}>
                <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
                <Typography variant='subheading'>{name}</Typography>
              </div>
              <Typography variant='caption'>{'참여: ' + answerDate}</Typography>
              <DeleteIconBtn sm color='default' />
            </ListItem>
            <Divider />
          </React.Fragment>
        )}
      </List>
    </React.Fragment>
  );
};

export default withStyles(styles)(EventParticipantList);
